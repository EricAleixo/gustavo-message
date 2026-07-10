'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { usePlayerStore } from '@/src/lib/store/player-store';
import { ListMusic } from 'lucide-react';
import TrackCover from '@/src/components/player/track-cover';

export default function Navbar() {
  const track = usePlayerStore((s) => s.queue[s.currentIndex]);
  const isPlaying = usePlayerStore((s) => s.isPlaying);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-on-surface-variant/10 bg-surface/80 px-margin-mobile py-6 backdrop-blur-md sm:px-margin-desktop">
      <Link href={'/'}>
        <span className="shrink-0 font-body text-sm font-semibold uppercase tracking-[0.15em] text-on-surface">
          EJC
        </span>
      </Link>

      <div className="flex min-w-0 items-center gap-3">
        <AnimatePresence mode="wait">
          {track && (
            <NowPlayingBadge key={track.id} track={track} isPlaying={isPlaying} />
          )}
        </AnimatePresence>

        <Link
          href="/musics"
          aria-label="Ir para músicas"
          className="flex h-9 w-9 shrink-0 items-center justify-center text-on-surface transition hover:text-primary cursor-pointer"
        >
          <ListMusic className="h-5 w-5" strokeWidth={1.75} />
        </Link>
      </div>
    </header>
  );
}

function NowPlayingBadge({
  track,
  isPlaying,
}: {
  track: { id: string; title: string; artist: string; cover?: string };
  isPlaying: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 12, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-32.5 shrink-0 sm:w-42.5"
    >
      <Link
        href="/musics"
        aria-label={`Tocando agora: ${track.title}`}
        className="flex w-full items-center gap-2 rounded-full border border-on-surface-variant/10 bg-surface/60 py-1 pl-1 pr-3 backdrop-blur-sm transition hover:border-primary/30"
      >
        <VinylDisc track={track} isPlaying={isPlaying} />

        <div className="flex min-w-0 flex-1 flex-col leading-tight">
          <Marquee text={track.title} isPlaying={isPlaying} />
          <span className="truncate font-body text-[10px] text-on-surface-variant/60">
            {track.artist}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function Marquee({ text, isPlaying }: { text: string; isPlaying: boolean }) {
  const isLong = text.length > 16;

  if (!isLong) {
    return (
      <span className="truncate font-body text-xs font-semibold text-on-surface">
        {text}
      </span>
    );
  }

  return (
    <div className="relative w-full min-w-0 overflow-hidden">
      <motion.div
        className="flex w-max whitespace-nowrap font-body text-xs font-semibold text-on-surface"
        animate={isPlaying ? { x: ['0%', '-50%'] } : {}}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
      >
        <span className="pr-8">{text}</span>
        <span className="pr-8" aria-hidden="true">{text}</span>
      </motion.div>
    </div>
  );
}

function VinylDisc({
  track,
  isPlaying,
}: {
  track: { title: string; cover?: string };
  isPlaying: boolean;
}) {
  return (
    <div
      className="vinyl-disc relative h-8 w-8 shrink-0 rounded-full bg-[radial-gradient(circle,#1a1a1a_0%,#1a1a1a_38%,#2a2a2a_39%,#2a2a2a_41%,#1a1a1a_42%,#1a1a1a_58%,#2a2a2a_59%,#2a2a2a_61%,#1a1a1a_62%,#1a1a1a_100%)] shadow-md"
      style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
    >
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-1 ring-black/40">
        <TrackCover
          src={track.cover}
          alt={track.title}
          size={12}
          className="h-3 w-3 rounded-full"
        />
      </div>
    </div>
  );
}