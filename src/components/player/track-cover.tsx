'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Music2 } from 'lucide-react';

// Paletas de gradiente — cada uma soa bem com texto/ícone branco por cima
const GRADIENTS = [
  ['#6366f1', '#8b5cf6'], // índigo → violeta
  ['#ec4899', '#f43f5e'], // rosa → vermelho
  ['#f59e0b', '#ef4444'], // âmbar → vermelho
  ['#10b981', '#06b6d4'], // esmeralda → ciano
  ['#3b82f6', '#6366f1'], // azul → índigo
  ['#8b5cf6', '#d946ef'], // violeta → fúcsia
  ['#14b8a6', '#3b82f6'], // teal → azul
  ['#f97316', '#ec4899'], // laranja → rosa
];

// Hash simples e determinístico: mesma faixa sempre gera a mesma cor
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function FallbackCover({
  seed,
  size,
  className = '',
}: {
  seed: string;
  size: number;
  className?: string;
}) {
  const [from, to] = useMemo(() => {
    const index = hashString(seed) % GRADIENTS.length;
    return GRADIENTS[index];
  }, [seed]);

  const iconSize = Math.round(size * 0.42);

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${from}, ${to})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Music2
        style={{ width: iconSize, height: iconSize }}
        className="text-white/90"
        strokeWidth={1.75}
      />
    </div>
  );
}

export default function TrackCover({
  src,
  alt,
  size = 48,
  className = '',
}: {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return <FallbackCover seed={alt} size={size} className={className} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      onError={() => setError(true)}
      className={className}
    />
  );
}