'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-margin-mobile pb-stack-xl pt-stack-md text-center sm:px-margin-desktop">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="font-body text-label-caps uppercase tracking-[0.15em] text-on-surface-variant/60"
      >
        Bem-vindo!!!
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="mt-stack-sm font-display text-display-lg-mobile font-bold text-primary sm:text-display-lg"
      >
        Encontro de Jovens com Cristo
      </motion.h1>

      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
        className="mt-stack-sm h-px w-12 bg-primary-container"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="mx-auto mt-stack-sm max-w-lg font-display text-lg italic leading-snug text-on-surface-variant"
      >
        Cara, não sei quando você vai ver isso, deve chegar em casa e dormir hahahaha. Mas deixarei aqui, caso queira ver quando conseguir.
      </motion.p>
    </div>
  );
}
