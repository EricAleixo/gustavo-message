import { Track } from '@/src/lib/store/player-store';
import { readdir } from 'fs/promises';
import path from 'path';
import { parseFile } from 'music-metadata';

const AUDIO_DIR = path.join(process.cwd(), 'public', 'audio');

export const EVENT_DAYS = [10, 11, 12] as const;
export type EventDay = (typeof EVENT_DAYS)[number];

export type TrackWithDay = Track & { day: EventDay };

// Faixas que precisam cair num dia específico do evento
const FIXED_DAY_ASSIGNMENTS: Record<string, EventDay> = {
  'Bandinha EJC Monteiro, Comunidade Shamah - Xalalá.mp3': 10,
  'Colo de Deus, Gabryelle Esteves - Eis-Me Aqui.mp3': 11,
  'Anjos de Resgate Oficial - Tua Família - Anjos de Resgate (DVD ao vivo em Brasilia).mp3': 12,
};

// Monta o mapeamento arquivo -> dia, dividindo o restante igualmente (round-robin)
function buildDaySchedule(files: string[]): Record<string, EventDay> {
  const schedule: Record<string, EventDay> = {};
  const remaining: string[] = [];

  for (const file of files) {
    if (FIXED_DAY_ASSIGNMENTS[file]) {
      schedule[file] = FIXED_DAY_ASSIGNMENTS[file];
    } else {
      remaining.push(file);
    }
  }

  // ordena pra garantir que a divisão seja sempre a mesma entre requests/deploys
  remaining.sort((a, b) => a.localeCompare(b));

  remaining.forEach((file, index) => {
    schedule[file] = EVENT_DAYS[index % EVENT_DAYS.length];
  });

  return schedule;
}

// Descobre qual "dia do evento" estamos, com base na data real (julho, dias 10-12)
function getCurrentEventDay(): EventDay {
  const now = new Date();
  const isJuly = now.getMonth() === 6; // 0-indexed: 6 = julho
  const day = now.getDate();

  if (!isJuly || day <= EVENT_DAYS[0]) return EVENT_DAYS[0];
  if (day >= EVENT_DAYS[EVENT_DAYS.length - 1]) return EVENT_DAYS[EVENT_DAYS.length - 1];
  return day as EventDay;
}

let cache: TrackWithDay[] | null = null;
let cacheTime = 0;
const CACHE_TTL = 1000 * 60 * 5;

async function buildTrackList(): Promise<TrackWithDay[]> {
  const files = await readdir(AUDIO_DIR);
  const mp3Files = files.filter((f) => f.toLowerCase().endsWith('.mp3'));
  const schedule = buildDaySchedule(mp3Files);

  const tracks = await Promise.all(
    mp3Files.map(async (file, index) => {
      const fullPath = path.join(AUDIO_DIR, file);
      let title = path.basename(file, '.mp3');
      let artist = 'Desconhecido';
      let duration: number | undefined;

      try {
        const metadata = await parseFile(fullPath, { duration: true });
        const { common, format } = metadata;
        if (common.title) title = common.title;
        if (common.artist) artist = common.artist;
        duration = format.duration;
      } catch (err) {
        console.error(`Erro ao ler metadados de ${file}:`, err);
      }

      return {
        id: String(index + 1),
        title,
        artist,
        src: `/audio/${encodeURIComponent(file)}`,
        duration: duration ?? 0,
        day: schedule[file],
      };
    })
  );

  return tracks;
}

async function getAllTracksCached(): Promise<TrackWithDay[]> {
  const now = Date.now();
  if (cache && now - cacheTime < CACHE_TTL) return cache;
  cache = await buildTrackList();
  cacheTime = now;
  return cache;
}

export interface GetTracksParams {
  search?: string;
  day?: EventDay;
}

export interface GetTracksResult {
  day: EventDay;
  tracks: TrackWithDay[];
}

/**
 * Service principal: retorna as faixas liberadas até o dia informado
 * (ou o dia atual do evento, se nenhum for passado), com filtro de busca opcional.
 */
export async function getTracks(params: GetTracksParams = {}): Promise<GetTracksResult> {
  const targetDay = params.day ?? getCurrentEventDay();
  const allTracks = await getAllTracksCached();

  // cumulativo: tudo que já foi "liberado" até o dia atual
  let result = allTracks.filter((t) => t.day <= targetDay);

  if (params.search) {
    const search = params.search.toLowerCase();
    result = result.filter(
      (t) =>
        t.title.toLowerCase().includes(search) ||
        t.artist.toLowerCase().includes(search)
    );
  }

  return { day: targetDay, tracks: result };
}

export function isValidEventDay(value: unknown): value is EventDay {
  return typeof value === 'number' && (EVENT_DAYS as readonly number[]).includes(value);
}