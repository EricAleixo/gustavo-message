import HeroGradient from './jornada/components/HeroGradient';
import Hero from './jornada/components/Hero';
import JourneyContent from './jornada/components/JourneyContent';

export default function JornadaPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-surface">
      <HeroGradient />
      <Hero />
      <JourneyContent />
    </main>
  );
}