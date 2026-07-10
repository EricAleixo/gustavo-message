'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto my-stack-md flex w-32 items-center gap-3"
    >
      <span className="h-px flex-1 bg-outline-variant/50" />
      <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
      <span className="h-px flex-1 bg-outline-variant/50" />
    </motion.div>
  );
}
