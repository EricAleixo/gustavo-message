'use client';

import { usePlayerStore } from '@/src/lib/store/player-store';
import { useEffect, useRef } from 'react';

export default function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isPlaying = usePlayerStore((s) => s.isPlaying);
  const volume = usePlayerStore((s) => s.volume);
  const track = usePlayerStore((s) => s.queue[s.currentIndex]);
  const setProgress = usePlayerStore((s) => s.setProgress);
  const setDuration = usePlayerStore((s) => s.setDuration);
  const setAudioElement = usePlayerStore((s) => s.setAudioElement);
  const setIsPlaying = usePlayerStore((s) => s.setIsPlaying); // precisa existir na store
  const next = usePlayerStore((s) => s.next);

  // Hidrata volume salvo e registra o elemento de áudio na store
  useEffect(() => {
    usePlayerStore.persist.rehydrate();
    setAudioElement(audioRef.current);
  }, []);

  // Troca de faixa
  useEffect(() => {
    if (!audioRef.current || !track) return;

    const audio = audioRef.current;
    audio.src = track.src;
    audio.load(); // garante recarregamento confiável (importante no Safari)
    setProgress(0); // zera a barra imediatamente, sem esperar o próximo tick

    if (isPlaying) {
      audio.play().catch(() => {
        // autoplay pode falhar (ex: sem interação do usuário ainda)
        setIsPlaying(false);
      });
    }
  }, [track?.id]);

  // Play / pause
  useEffect(() => {
    if (!audioRef.current || !track) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Volume
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  return (
    <>
      {children}
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={next}
        preload="metadata"
      />
    </>
  );
}