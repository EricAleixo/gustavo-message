'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePlayerStore, Track } from '@/src/lib/store/player-store';

export default function AutoPlayTrigger({
  delayMs = 9000,
  trackId,
  name = 'Toque para abrir',
}: {
  delayMs?: number;
  trackId?: string;
  name?: string;
}) {
  const playTrack = usePlayerStore((s) => s.playTrack);
  const [hasEntered, setHasEntered] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!hasEntered) return;

    const timer = setTimeout(async () => {
      if (hasTriggeredRef.current) return;
      hasTriggeredRef.current = true;

      try {
        const res = await fetch('/api/tracks');
        const data = await res.json();
        const tracks: Track[] = data.tracks ?? [];
        if (!tracks.length) return;

        const target = trackId
          ? tracks.find((t) => t.id === trackId) ?? tracks[0]
          : tracks[0];

        playTrack(target, tracks);
      } catch (err) {
        console.error('Erro ao buscar faixas:', err);
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [hasEntered, delayMs, trackId, playTrack]);

  return (
    <AnimatePresence>
      {!hasEntered && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onClick={() => setHasEntered(true)}
          className="fixed inset-0 z-100 flex cursor-pointer flex-col items-center justify-center gap-2 bg-surface"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="font-body text-sm uppercase tracking-[0.2em] text-on-surface-variant/70"
          >
            {name}
          </motion.p>

          <motion.p
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="font-body text-xs uppercase tracking-[0.15em] text-on-surface-variant/50"
          >
            Coloque fone para melhor experiência
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}