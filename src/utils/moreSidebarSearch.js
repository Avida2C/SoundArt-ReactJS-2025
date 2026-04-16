import artistData from "../data/Artist/artistData";
import articlesData from "../data/Articles/articlesData";
import concertsData from "../data/concertsData";

function normalize(raw) {
  return raw.trim().toLowerCase();
}

/**
 * Match counts using the same rules as Artists, News, and Concerts listing pages.
 */
export function countSearchMatches(rawQuery) {
  const q = normalize(rawQuery);
  if (!q) {
    return { artists: 0, news: 0, concerts: 0 };
  }

  const artists = artistData.filter(
    (artist) =>
      artist.name.toLowerCase().includes(q) ||
      artist.bio.toLowerCase().includes(q)
  ).length;

  const news = articlesData.filter(
    (article) =>
      article.title.toLowerCase().includes(q) ||
      article.author.toLowerCase().includes(q) ||
      article.content.some((paragraph) =>
        paragraph.toLowerCase().includes(q)
      ) ||
      article.tags.some((tag) => tag.toLowerCase().includes(q))
  ).length;

  const concerts = concertsData.filter(
    (concert) =>
      concert.artist.toLowerCase().includes(q) ||
      concert.venue.toLowerCase().includes(q) ||
      concert.city.toLowerCase().includes(q) ||
      (concert.country && concert.country.toLowerCase().includes(q))
  ).length;

  return { artists, news, concerts };
}

/**
 * Pick artists / news / concerts by strongest match; ties favor artists, then news.
 */
export function getSearchTargetPath(rawQuery) {
  const trimmed = rawQuery.trim();
  if (!trimmed) {
    return "/artists";
  }

  const qs = `?${new URLSearchParams({ q: trimmed }).toString()}`;
  const counts = countSearchMatches(trimmed);

  if (counts.artists === 0 && counts.news === 0 && counts.concerts === 0) {
    return `/artists${qs}`;
  }

  const order = [
    { key: "artists", path: "/artists" },
    { key: "news", path: "/news" },
    { key: "concerts", path: "/concerts" },
  ];

  let best = order[0];
  for (const o of order) {
    if (counts[o.key] > counts[best.key]) {
      best = o;
    }
  }

  return `${best.path}${qs}`;
}
