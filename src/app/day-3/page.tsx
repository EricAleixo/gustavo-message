import HeroGradient from './components/HeroGradient';
import PageHero from './components/PageHero';
import LetterContent from './components/LetterContent';
import AutoPlayTrigger from '@/src/components/player/AutoPlayTrigger';
import { redirect } from 'next/navigation';

export default function DayPage() {

  const now = new Date();
  
    const releaseDate = new Date(now.getFullYear(), 6, 12, 16, 0, 0);
  
    if (now < releaseDate) {
      redirect("/");
    }

  return (
    <main className="relative isolate min-h-screen bg-surface">
      <HeroGradient />
      <PageHero />
      <LetterContent />
      <AutoPlayTrigger delayMs={5000} />
    </main>
  );
}