'use client';

import { useEffect, useState } from 'react';
import { daysConfig } from '../days.config';
import { computeDaysWithStatus } from '../dayStatus';
import DaysGrid from './DaysGrid';
import OverallProgress from './OverallProgress';
import ContinueCTA from './ContinueCTA';

export default function JourneyContent() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const days = now
    ? computeDaysWithStatus(daysConfig, now)
    : daysConfig.map((day, index) => ({
        ...day,
        status: 'locked' as const,
        number: index + 1,
      }));

  return (
    <>
      <DaysGrid days={days} />
      <OverallProgress days={days} />
      <ContinueCTA days={days} />
    </>
  );
}
