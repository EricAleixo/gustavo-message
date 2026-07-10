'use client';

import { motion } from 'framer-motion';

export default function MidLetterEmphasis({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center font-display text-2xl italic leading-snug text-primary sm:text-3xl"
    >
      {children}
    </motion.p>
  );
}
