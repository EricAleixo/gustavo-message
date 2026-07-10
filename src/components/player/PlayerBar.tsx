'use client';

import { usePlayerStore } from '@/src/lib/store/player-store';
import { AnimatePresence, motion } from 'framer-motion';
import { Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef } from 'react';
import TrackCover from './track-cover';

function formatTime(sec: number) {
  if (!isFinite(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function PlayerBar() {
  const isVisible = usePlayerStore((s) => s.isPlayerVisible);
  const isPlaying = usePlayerStore((s) => s.isPlaying);
  const track = usePlayerStore((s) => s.queue[s.currentIndex]);
  const progress = usePlayerStore((s) => s.progress);
  const duration = usePlayerStore((s) => s.duration);
  const volume = usePlayerStore((s) => s.volume);

  const togglePlay = usePlayerStore((s) => s.togglePlay);
  const next = usePlayerStore((s) => s.next);
  const prev = usePlayerStore((s) => s.prev);
  const seek = usePlayerStore((s) => s.seek);
  const setVolume = usePlayerStore((s) => s.setVolume);

  const rangeRef = useRef<HTMLInputElement>(null);
  const timeLabelRef = useRef<HTMLSpanElement>(null);
  const isSeekingRef = useRef(false);

  const paintFill = (input: HTMLInputElement, value: number, max: number) => {
    const pct = max > 0 ? (value / max) * 100 : 0;
    input.style.setProperty('--fill', `${pct}%`);
  };

  // Sincroniza a barra com o progresso real, só quando não está arrastando
  useEffect(() => {
    if (isSeekingRef.current) return;
    if (rangeRef.current) {
      rangeRef.current.value = String(progress);
      paintFill(rangeRef.current, progress, duration || 0);
    }
    if (timeLabelRef.current) {
      timeLabelRef.current.textContent = `${formatTime(progress)} / ${formatTime(duration)}`;
    }
  }, [progress, duration]);

  const handleSeekStart = () => {
    isSeekingRef.current = true;
  };

  const handleSeekInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const val = Number(input.value);
    paintFill(input, val, duration || 0);
    if (timeLabelRef.current) {
      timeLabelRef.current.textContent = `${formatTime(val)} / ${formatTime(duration)}`;
    }
  };

  const handleSeekCommit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    seek(val);
    isSeekingRef.current = false;
  };

  return (
    <AnimatePresence>
      {isVisible && track && (
        <motion.div
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-on-surface-variant/10 bg-surface/95 backdrop-blur-md"
        >
          <input
            ref={rangeRef}
            type="range"
            min={0}
            max={duration || 0}
            defaultValue={0}
            onPointerDown={handleSeekStart}
            onInput={handleSeekInput}
            onChange={handleSeekCommit}
            aria-label="Progresso da faixa"
            className="seek-slider absolute -top-[2px] h-1 w-full cursor-pointer appearance-none bg-transparent"
          />

          <div className="mx-auto flex max-w-6xl items-center gap-4 px-margin-mobile py-3 sm:px-margin-desktop">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <TrackCover
                src={track.cover}
                alt={track.title}
                size={48}
                className="h-12 w-12 flex-shrink-0 rounded-xl object-cover shadow-sm"
              />
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold text-on-surface">
                  {track.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="text-on-surface-variant/70 transition hover:scale-110 hover:text-primary active:scale-95"
                aria-label="Anterior"
              >
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                onClick={togglePlay}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-on-primary shadow-md transition hover:scale-105 active:scale-95"
                aria-label={isPlaying ? 'Pausar' : 'Tocar'}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 pl-0.5" />}
              </button>
              <button
                onClick={next}
                className="text-on-surface-variant/70 transition hover:scale-110 hover:text-primary active:scale-95"
                aria-label="Próxima"
              >
                <SkipForward className="h-5 w-5" />
              </button>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <span
                ref={timeLabelRef}
                className="w-24 flex-shrink-0 text-right font-body text-xs tabular-nums text-on-surface-variant/60"
              >
                {formatTime(progress)} / {formatTime(duration)}
              </span>
              <VolumeControl volume={volume} onChange={setVolume} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function VolumeControl({
  volume,
  onChange,
}: {
  volume: number;
  onChange: (v: number) => void;
}) {
  const rangeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.style.setProperty('--fill', `${volume * 100}%`);
    }
  }, [volume]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const val = Number(e.currentTarget.value);
    e.currentTarget.style.setProperty('--fill', `${val * 100}%`);
    onChange(val);
  };

  return (
    <div className="flex items-center gap-2">
      {volume === 0 ? (
        <VolumeX className="h-4 w-4 flex-shrink-0 text-on-surface-variant/60" />
      ) : (
        <Volume2 className="h-4 w-4 flex-shrink-0 text-on-surface-variant/60" />
      )}
      <input
        ref={rangeRef}
        type="range"
        min={0}
        max={1}
        step={0.01}
        defaultValue={volume}
        onInput={handleInput}
        aria-label="Volume"
        className="volume-slider w-20 cursor-pointer appearance-none bg-transparent"
      />
    </div>
  );
}