import React from "react";

/**
 * TrendingThisWeek - Displays trending tracks for the week
 * @param {Array} topTracks - Array of track objects with weeklyPlays
 * @param {Function} formatPlayCount - Function to format play counts
 */
export default function TrendingThisWeek({ topTracks, formatPlayCount }) {
  const sortedTrending = [...topTracks]
    .sort((a, b) => b.weeklyPlays - a.weeklyPlays)
    .slice(0, 3);

  if (!sortedTrending || sortedTrending.length === 0) {
    return null;
  }

  return (
    <div
      className="card border-0"
      style={{ 
        borderRadius: "4px",
        boxShadow: "0 0.125rem 0.5rem rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="card-body p-4">
        <h5
          className="mb-4 fw-bold"
          style={{ color: "#353535", fontFamily: "sans-serif" }}
        >
          Trending This Week
        </h5>

        <div className="d-flex flex-column gap-3">
          {sortedTrending.map((track, index) => (
            <div
              key={index}
              className="d-flex align-items-center p-3 rounded"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "4px",
              }}
            >
              <span
                className="badge me-3 fw-bold bg-warning"
                style={{
                  minWidth: "35px",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffc107",
                  borderRadius: "4px",
                  color: "#353535",
                }}
              >
                #{index + 1}
              </span>
              <div className="flex-grow-1">
                <h6
                  className="mb-0 fw-bold"
                  style={{ color: "#353535", fontFamily: "sans-serif" }}
                >
                  {track.title}
                </h6>
                <small
                  className="text-muted"
                  style={{ color: "#6c757d", fontFamily: "sans-serif", marginTop: 0 }}
                >
                  {formatPlayCount(track.weeklyPlays)} plays this week
                </small>
              </div>
              <i
                className="bi bi-arrow-up text-success"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

