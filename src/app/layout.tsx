import type { Metadata } from 'next';
import './globals.css';
import PlayerBar from '../components/player/PlayerBar';
import PlayerProvider from '../components/player/PlayerProvider';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'EJC — Inicie sua jornada espiritual',
  description:
    'Se você está lendo isso... Deus preparou algo muito maior do que imagina.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-surface pb-24">
        <PlayerProvider>
          <Navbar />
          <div className="pt-20">{children}</div>
          <PlayerBar />
        </PlayerProvider>
      </body>
    </html>
  );
}