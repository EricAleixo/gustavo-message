'use client';

import { motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { Track, usePlayerStore } from '@/src/lib/store/player-store';
import TrackCover from './track-cover';

function formatTime(sec?: number) {
  if (!sec || !isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function TrackList({ tracks }: { tracks: Track[] }) {
  const currentTrack = usePlayerStore((s) => s.queue[s.currentIndex]);
  const isPlaying = usePlayerStore((s) => s.isPlaying);
  const playTrack = usePlayerStore((s) => s.playTrack);
  const togglePlay = usePlayerStore((s) => s.togglePlay);

  return (
    <ul className="flex flex-col divide-y divide-on-surface-variant/10">
      {tracks.map((track, i) => {
        const isCurrent = currentTrack?.id === track.id;
        const isActivePlaying = isCurrent && isPlaying;

        return (
          <motion.li
            key={track.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            onClick={() => (isCurrent ? togglePlay() : playTrack(track, tracks))}
            className={`group flex cursor-pointer items-center gap-4 rounded-xl px-3 py-2.5 transition-colors ${
              isCurrent ? 'bg-primary/5' : 'hover:bg-on-surface-variant/5'
            }`}
          >
            {/* índice / equalizer / play-pause overlay */}
            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
              <span
                className={`font-body text-sm tabular-nums text-on-surface-variant/50 transition-opacity ${
                  'group-hover:opacity-0'
                } ${isCurrent ? 'opacity-0' : 'opacity-100'}`}
              >
                {i + 1}
              </span>

              <button
                aria-label={isActivePlaying ? 'Pausar' : 'Tocar'}
                className={`absolute inset-0 flex items-center justify-center text-primary transition-opacity ${
                  isCurrent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                {isActivePlaying ? (
                  <EqualizerBars />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="relative shrink-0">
              <TrackCover
                src={track.cover}
                alt={track.title}
                size={48}
                className="h-12 w-12 rounded-lg object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className={`truncate font-body font-medium ${
                  isCurrent ? 'text-primary' : 'text-on-surface'
                }`}
              >
                {track.title}
              </p>
            </div>

            <span className="hidden font-body text-xs tabular-nums text-on-surface-variant/50 sm:block">
              {formatTime(track.duration)}
            </span>

            <button
              aria-label={isActivePlaying ? 'Pausar' : 'Tocar'}
              onClick={(e) => {
                e.stopPropagation();
                isCurrent ? togglePlay() : playTrack(track, tracks);
              }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary/20 active:scale-95"
            >
              {isActivePlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 pl-0.5" />
              )}
            </button>
          </motion.li>
        );
      })}
    </ul>
  );
}

function EqualizerBars() {
  return (
    <span className="flex h-4 items-end gap-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-0.75 rounded-full bg-primary"
          animate={{ height: ['30%', '100%', '50%', '90%', '30%'] }}
          transition={{
            duration: 1 + i * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </span>
  );
}