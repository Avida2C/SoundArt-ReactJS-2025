/**
 * Only `featured` artists have public profile routes. `legendary` may appear in the Legendary Artists strip but stays disabled.
 */
export function isArtistProfilePublic(artist) {
  return Boolean(artist?.featured);
}

/** Max cards in the Legendary Artists strip (home, concerts, artist page). */
export const LEGENDARY_SECTION_LIMIT = 3;

/**
 * Legendary Artists strip pool: all `featured`, then extras marked `legendary`
 * (sorted by id; not public profiles / disabled cards). Uncapped — use
 * {@link getLegendarySectionDisplayArtists} for the UI limit.
 */
export function getLegendarySectionArtists(artists) {
  const featured = artists
    .filter((a) => a.featured)
    .sort((a, b) => a.id - b.id);
  const legendaryOnly = artists
    .filter((a) => a.legendary && !a.featured)
    .sort((a, b) => a.id - b.id);
  return [...featured, ...legendaryOnly];
}

/**
 * Artists to show in the Legendary strip: same order as {@link getLegendarySectionArtists},
 * optionally excluding one id (e.g. current artist page), then capped at `limit`.
 * Exclude runs before the cap so the strip can still fill three slots.
 */
export function getLegendarySectionDisplayArtists(artists, options = {}) {
  const { excludeId, limit = LEGENDARY_SECTION_LIMIT } = options;
  let list = getLegendarySectionArtists(artists);
  if (excludeId != null) {
    list = list.filter((a) => a.id !== excludeId);
  }
  return list.slice(0, limit);
}