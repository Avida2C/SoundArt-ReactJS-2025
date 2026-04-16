import { useState, useEffect, useRef } from "react";

/** Minimum time to show the loading UI so fast batches still feel responsive */
const LOAD_UI_MIN_MS = 280;

function initialVisibleCount(items, pageSize) {
  if (!items?.length) return 0;
  return Math.min(pageSize, items.length);
}

/**
 * Reveal list items in batches as the user scrolls (IntersectionObserver).
 * Resets when `items` identity changes (e.g. new filter/sort results).
 */
export function useInfiniteScrollBatch(items, pageSize = 12) {
  const [visibleCount, setVisibleCount] = useState(() =>
    initialVisibleCount(items, pageSize)
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const sentinelRef = useRef(null);
  const loadingLockRef = useRef(false);

  useEffect(() => {
    setVisibleCount(initialVisibleCount(items, pageSize));
    loadingLockRef.current = false;
    setIsLoadingMore(false);
  }, [items, pageSize]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || items.length === 0) return;
    if (visibleCount >= items.length) return;

    let timerId = null;

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        if (loadingLockRef.current) return;

        loadingLockRef.current = true;
        setIsLoadingMore(true);

        timerId = setTimeout(() => {
          timerId = null;
          setVisibleCount((c) => Math.min(c + pageSize, items.length));
          setIsLoadingMore(false);
          loadingLockRef.current = false;
        }, LOAD_UI_MIN_MS);
      },
      { root: null, rootMargin: "180px 0px 0px 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timerId) clearTimeout(timerId);
      loadingLockRef.current = false;
      setIsLoadingMore(false);
    };
  }, [items, items.length, pageSize, visibleCount]);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;
  const allLoaded = items.length > 0 && visibleCount >= items.length;

  return { visibleItems, sentinelRef, hasMore, allLoaded, isLoadingMore };
}
