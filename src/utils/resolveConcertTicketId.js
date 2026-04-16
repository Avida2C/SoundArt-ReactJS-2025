import concertsData from "../data/concertsData";

/**
 * Resolves a concertsData id for ticket links when a concert object omits `id`
 * (e.g. Artists page mock list or artist profile tab rows).
 */
export function resolveConcertTicketId(concert) {
  if (concert?.id != null && Number.isFinite(Number(concert.id))) {
    return Number(concert.id);
  }

  const artist = concert?.artist;
  const date = concert?.date;
  const venue = concert?.venue;

  if (artist && date && venue) {
    const exact = concertsData.find(
      (c) => c.artist === artist && c.date === date && c.venue === venue
    );
    if (exact?.id != null) return exact.id;
  }

  if (artist) {
    const byArtist = concertsData.find((c) => c.artist === artist);
    if (byArtist?.id != null) return byArtist.id;
  }

  return concertsData[0]?.id ?? 1;
}
