import { useEffect } from "react";

/**
 * usePageTitle - sets the document title for a page
 * @param {string} title - Page-specific title, e.g. "Artists"
 * @param {string} [suffix="SoundArt"] - Optional app name suffix
 */
export default function usePageTitle(title, suffix = "SoundArt") {
  useEffect(() => {
    if (!title) {
      document.title = suffix;
      return;
    }

    document.title = `${title} | ${suffix}`;
  }, [title, suffix]);
}

