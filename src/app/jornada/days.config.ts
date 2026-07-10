export type DayConfig = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  /**
   * Data em que este dia é liberado, formato "AAAA-MM-DD".
   * Enquanto a data atual for anterior a esta, o card aparece bloqueado.
   * Edite livremente para personalizar quando cada dia abre.
   */
  unlockDate: string;
};

export const daysConfig: DayConfig[] = [
  {
    slug: '/day-1',
    eyebrow: 'Conexão Inicial',
    title: 'Dia 1: O Despertar',
    description: 'O início da caminhada rumo à luz.',
    unlockDate: '2026-07-10',
  },
  {
    slug: '/day-2',
    eyebrow: 'Fraternidade',
    title: 'Dia 2: A Entrega',
    description: 'Um momento de partilha e fortalecimento.',
    unlockDate: '2026-07-11',
  },
  {
    slug: '/day-3',
    eyebrow: 'Renovação',
    title: 'Dia 3: A Nova Caminhada',
    description: 'A celebração de uma vida renovada.',
    unlockDate: '2026-07-12',
  },
];
