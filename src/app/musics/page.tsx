import TrackList from "@/src/components/player/TrackList";
import { getTracks } from "@/src/lib/services/track-services";

export default async function MusicPage() {
  const { tracks } = await getTracks();

  return (
    <main className="mx-auto px-margin-mobile py-stack-xl sm:px-margin-desktop">
      <h1 className="mb-stack-md font-display text-2xl font-bold text-on-surface">Músicas</h1>
      <TrackList tracks={tracks} />
    </main>
  );
}