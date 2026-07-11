'use client';

import { motion } from 'framer-motion';

export default function PageHero() {
  return (
    <div className="relative z-10 mx-auto max-w-2xl px-margin-mobile pb-stack-md pt-stack-sm text-center sm:px-margin-desktop">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="font-body text-label-caps uppercase tracking-[0.15em] text-on-surface-variant/70"
      >
        Dia 1
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="mt-stack-sm font-display text-display-lg-mobile font-bold text-on-surface sm:text-display-lg"
      >
        Bem-vindo!!!!
      </motion.h1>

      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
        className="mx-auto mt-stack-sm block h-px w-16 bg-primary-container"
      />
    </div>
  );
}
