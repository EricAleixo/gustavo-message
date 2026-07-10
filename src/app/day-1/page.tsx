import HeroGradient from './components/HeroGradient';
import PageHero from './components/PageHero';
import LetterContent from './components/LetterContent';
import AutoPlayTrigger from '@/src/components/player/AutoPlayTrigger';

export default function DayPage() {
  return (
    <main className="relative isolate min-h-screen bg-surface">
      <HeroGradient />
      <PageHero />
      <LetterContent />
      <AutoPlayTrigger trackId={"3"} delayMs={5000} />
    </main>
  );
}