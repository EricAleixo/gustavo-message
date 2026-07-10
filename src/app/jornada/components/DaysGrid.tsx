'use client';

import { motion } from 'framer-motion';
import type { DayWithStatus } from '../dayStatus';
import DayCard from './DayCard';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

type DaysGridProps = {
  days: DayWithStatus[];
};

export default function DaysGrid({ days }: DaysGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto max-w-container px-margin-mobile pb-stack-xl sm:px-margin-desktop"
    >
      <div className="grid gap-stack-md sm:grid-cols-3 sm:gap-gutter">
        {days.map((day) => (
          <DayCard key={day.slug} day={day} />
        ))}
      </div>
    </motion.section>
  );
}
