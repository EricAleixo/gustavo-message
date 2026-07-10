'use client';

import { motion } from 'framer-motion';

type PullQuoteCardProps = {
  quote: string;
  reference?: string;
};

export default function PullQuoteCard({ quote, reference }: PullQuoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-lg border border-gold-border bg-surface-container-low px-8 py-8 text-center sm:px-12"
    >
      <p className="font-display text-lg italic leading-relaxed text-primary sm:text-xl">
        &ldquo;{quote}&rdquo;
      </p>

      {reference && (
        <p className="mt-stack-sm font-body text-label-caps uppercase tracking-[0.15em] text-on-surface-variant/60">
          — {reference}
        </p>
      )}
    </motion.div>
  );
}
