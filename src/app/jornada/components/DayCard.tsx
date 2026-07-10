'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { DayWithStatus } from '../dayStatus';
import { formatUnlockDate } from '../dayStatus';
import LockIcon from './icons/LockIcon';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type DayCardProps = {
  day: DayWithStatus;
};

export default function DayCard({ day }: DayCardProps) {
  const { status, number, slug, unlockDate, title } = day;
  const isLocked = status === 'locked';
  const isCurrent = status === 'current';

  const cardBody = (
    <>
      {isCurrent && (
        <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-on-primary shadow-golden-aura">
          Atual
        </span>
      )}

      <div className="relative flex flex-1 flex-col items-center justify-center gap-4 px-6 py-10">
        {/* selo decorativo atrás do número */}
        <div
          className={`absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-[0.4s] ${
            isLocked
              ? 'border-on-surface-variant/10'
              : 'border-primary/20 group-hover:border-primary/40'
          }`}
        />

        <span
          className={`relative font-display text-display-sm font-semibold transition-colors duration-[0.4s] ${
            isLocked ? 'text-on-surface-variant/30' : 'text-primary'
          }`}
        >
          {String(number).padStart(2, '0')}
        </span>

        {isLocked ? (
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-surface-container/80">
            <LockIcon className="h-3.5 w-3.5 text-on-surface-variant/60" />
          </span>
        ) : (
          <span className="relative h-px w-10 bg-primary/50" />
        )}
      </div>

      <div className="flex flex-col items-center gap-1.5 border-t border-gold-border/60 px-6 py-5 text-center">
        <span className="font-display text-headline-sm font-semibold text-on-surface">
          Dia {number}
        </span>
        <span
          className={
            isLocked
              ? 'font-body text-label-caps uppercase tracking-[0.15em] text-on-surface-variant/40'
              : 'font-body text-label-caps uppercase tracking-[0.15em] text-primary'
          }
        >
          {isLocked ? `Libera em ${formatUnlockDate(unlockDate)}` : formatUnlockDate(unlockDate)}
        </span>
      </div>
    </>
  );

  const sharedClassName =
    'group relative flex flex-col overflow-hidden rounded-lg border border-gold-border bg-surface-container-lowest transition-all duration-[0.4s] ease-in-out';

  return (
    <motion.div variants={cardVariants} transition={{ duration: 0.55, ease: 'easeOut' }}>
      {isLocked ? (
        <div
          className={`${sharedClassName} cursor-not-allowed opacity-80`}
          aria-disabled="true"
          aria-label={`${title} — bloqueado até ${formatUnlockDate(unlockDate)}`}
        >
          {cardBody}
        </div>
      ) : (
        <Link
          href={slug}
          aria-label={title}
          className={`${sharedClassName} hover:-translate-y-1 hover:border-primary-container hover:shadow-golden-aura`}
        >
          {cardBody}
        </Link>
      )}
    </motion.div>
  );
}