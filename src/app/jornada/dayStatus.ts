import type { DayConfig } from './days.config';

export type DayStatus = 'completed' | 'current' | 'locked';

export type DayWithStatus = DayConfig & {
  status: DayStatus;
  number: number;
};

/**
 * Um dia é "completed" se já foi liberado e existe um dia mais recente
 * também liberado. O último dia liberado vira "current" (o próximo passo
 * sugerido). Dias cuja unlockDate ainda não chegou ficam "locked".
 */
export function computeDaysWithStatus(
  days: DayConfig[],
  now: Date,
): DayWithStatus[] {
  const unlocked = days.map((day) => now >= new Date(`${day.unlockDate}T00:00:00`));
  const lastUnlockedIndex = unlocked.lastIndexOf(true);

  return days.map((day, index) => {
    let status: DayStatus = 'locked';
    if (unlocked[index]) {
      status = index === lastUnlockedIndex ? 'current' : 'completed';
    }
    return { ...day, status, number: index + 1 };
  });
}

export function formatUnlockDate(unlockDate: string): string {
  const date = new Date(`${unlockDate}T00:00:00`);
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
  });
}
