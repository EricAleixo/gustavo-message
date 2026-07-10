'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { DayWithStatus } from '../dayStatus';

type ContinueCTAProps = {
  days: DayWithStatus[];
};

export default function ContinueCTA({ days }: ContinueCTAProps) {
  const currentDay = days.find((day) => day.status === 'current');

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
      className="mt-stack-md flex justify-center px-margin-mobile pb-stack-xl sm:px-margin-desktop"
    >
      {currentDay ? (
        <Link
          href={currentDay.slug}
          className="rounded bg-primary px-10 py-4 font-body text-label-caps uppercase tracking-[0.15em] text-on-primary shadow-golden-aura transition-all duration-[0.4s] ease-in-out hover:bg-[#8a6f00] hover:shadow-[0_0_32px_8px_rgba(212,175,55,0.25)]"
        >
          Continuar Caminhada
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded bg-surface-container px-10 py-4 font-body text-label-caps uppercase tracking-[0.15em] text-on-surface-variant/50">
          Disponível em breve
        </span>
      )}
    </motion.div>
  );
}
