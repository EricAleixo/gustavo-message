import TrackList from "@/src/components/player/TrackList";
import { Track } from "@/src/lib/store/player-store";

async function getTracks(): Promise<Track[]> {

  const res = await fetch(
    `/api/tracks`
  );

  if (!res.ok) {
    throw new Error(
      `${res.status} ${res.statusText}\n${await res.text()}`
    );
  }

  const data = await res.json();
  return data.tracks;
}

export default async function MusicPage() {
  const tracks = await getTracks();
  return (
    <main className="mx-auto px-margin-mobile py-stack-xl sm:px-margin-desktop">
      <h1 className="mb-stack-md font-display text-2xl font-bold text-on-surface">Músicas</h1>
      <TrackList tracks={tracks} />
    </main>
  );
}