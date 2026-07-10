'use client';

import { motion } from 'framer-motion';
import type { DayWithStatus } from '../dayStatus';

type OverallProgressProps = {
  days: DayWithStatus[];
};

export default function OverallProgress({ days }: OverallProgressProps) {
  const completed = days.filter((day) => day.status === 'completed').length;
  const hasCurrent = days.some((day) => day.status === 'current');
  const progress = ((completed + (hasCurrent ? 0.5 : 0)) / days.length) * 100;

  return (
    <div className="mx-auto max-w-xs px-margin-mobile sm:px-margin-desktop">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-outline-variant/40">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  );
}
