'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

type LetterBlockProps = {
  tone: 'normal' | 'white';
  children: React.ReactNode;
};

export default function LetterBlock({ tone, children }: LetterBlockProps) {
  const toneClasses =
    tone === 'white'
      ? 'rounded-lg border border-gold-border bg-surface-container-lowest px-6 py-8 sm:px-10'
      : 'px-1';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`space-y-stack-sm ${toneClasses}`}
    >
      {children}
    </motion.div>
  );
}
