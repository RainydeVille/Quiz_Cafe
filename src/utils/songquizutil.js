import { songLibrary } from "../library/results/songs";

export function getSong(vibe, subVibe) {
  const songs = songLibrary[vibe]?.[subVibe];

  if (!songs || songs.length === 0) {
    return {
      artist: "Unknown",
      title: "No song found",
    };
  }

  return songs[Math.floor(Math.random() * songs.length)];
}
