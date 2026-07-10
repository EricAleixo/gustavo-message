'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Track = {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover?: string; // opcional agora — sem cover, cai no fallback
  duration: number;
};  

type PlayerState = {
  queue: Track[];
  currentIndex: number;
  isPlaying: boolean;
  isPlayerVisible: boolean;
  progress: number;
  duration: number;
  volume: number;
  audioElement: HTMLAudioElement | null;

  playTrack: (track: Track, queue?: Track[]) => void;
  togglePlay: () => void;
  next: () => void;
  prev: () => void;
  seek: (time: number) => void;
  setVolume: (v: number) => void;
  setProgress: (t: number) => void;
  setDuration: (d: number) => void;
  setIsPlaying: (playing: boolean) => void;
  setAudioElement: (el: HTMLAudioElement | null) => void;
};

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set, get) => ({
      queue: [],
      currentIndex: -1,
      isPlaying: false,
      isPlayerVisible: false,
      progress: 0,
      duration: 0,
      volume: 0.8,
      audioElement: null,

      playTrack: (track, queue) => {
        const list = queue ?? [track];
        const index = list.findIndex((t) => t.id === track.id);
        set({
          queue: list,
          currentIndex: index === -1 ? 0 : index,
          isPlaying: true,
          isPlayerVisible: true,
          progress: 0,
        });
      },

      togglePlay: () => set((s) => ({ isPlaying: !s.isPlaying })),

      next: () => {
        const { queue, currentIndex } = get();
        if (!queue.length) return;
        set({
          currentIndex: (currentIndex + 1) % queue.length,
          isPlaying: true,
          progress: 0,
        });
      },

      prev: () => {
        const { queue, currentIndex } = get();
        if (!queue.length) return;
        set({
          currentIndex: (currentIndex - 1 + queue.length) % queue.length,
          isPlaying: true,
          progress: 0,
        });
      },

      // Agora mexe no <audio> de verdade, não só no estado
      seek: (time) => {
        const { audioElement } = get();
        if (audioElement) {
          audioElement.currentTime = time;
        }
        set({ progress: time });
      },

      setVolume: (v) => set({ volume: v }),
      setProgress: (t) => set({ progress: t }),
      setDuration: (d) => set({ duration: d }),
      setIsPlaying: (playing) => set({ isPlaying: playing }),
      setAudioElement: (el) => set({ audioElement: el }),
    }),
    {
      name: 'player-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ volume: s.volume }),
      skipHydration: true,
    }
  )
);