import React from "react";

/**
 * Bottom sentinel for infinite scroll: spinner while more exists, end message when done.
 */
export default function InfiniteScrollSentinel({
  sentinelRef,
  hasMore,
  allLoaded,
  isLoadingMore = false,
}) {
  return (
    <div ref={sentinelRef} className="py-4 text-center" aria-live="polite">
      {hasMore && isLoadingMore && (
        <>
          <div
            className="spinner-border text-warning"
            style={{ width: "2rem", height: "2rem" }}
            role="status"
            aria-label="Loading more"
          >
            <span className="visually-hidden">Loading more</span>
          </div>
          <p className="text-muted small mt-2 mb-0">Loading…</p>
        </>
      )}
      {allLoaded && (
        <p className="text-muted small mb-0 pt-3 mt-2 border-top border-secondary-subtle">
          {"You're all caught up."}
        </p>
      )}
    </div>
  );
}
