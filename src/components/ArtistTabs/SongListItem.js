import React from "react";

/**
 * SongListItem - Displays a single song in the music list
 * @param {Object} track - Track object with title, album, releaseYear, playCount, weeklyPlays, duration, spotifyId, youtubeId
 * @param {number} index - Index of the track (0-based, will display as rank)
 * @param {Function} formatPlayCount - Function to format play counts
 */
export default function SongListItem({ track, index, formatPlayCount }) {
  return (
    <div
      className="card border-0 mb-3"
      style={{
        borderRadius: "4px",
        boxShadow: "0 0.125rem 0.5rem rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="card-body p-4">
        <div className="d-flex align-items-center">
          {/* Ranking Number */}
          {(() => {
            const rank = index + 1;
            let bgColor = "#F0F2F4";
            let textColor = "#353535";
            
            if (rank === 1) {
              bgColor = "#FFB300";
              textColor = "white";
            } else if (rank === 2) {
              bgColor = "#4E4E4E";
              textColor = "white";
            } else if (rank === 3) {
              bgColor = "#C6C6C6";
              textColor = "#353535";
            }
            
            return (
              <div
                className="d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: bgColor,
                  borderRadius: "4px",
                  color: textColor,
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                }}
              >
                {rank}
              </div>
            );
          })()}

          {/* Song Information */}
          <div className="flex-grow-1 me-4">
            <h6
              className="mb-1 fw-bold"
              style={{ color: "#353535", fontFamily: "sans-serif" }}
            >
              {track.title}
            </h6>
            <small
              className="text-muted"
              style={{ color: "#6c757d", fontFamily: "sans-serif" }}
            >
              {track.album} • {track.releaseYear}
            </small>
          </div>

          {/* Play Counts */}
          <div className="d-flex gap-4 me-4">
            <div className="text-center">
              <div
                className="fw-bold mb-1"
                style={{ color: "#ffc107", fontFamily: "sans-serif" }}
              >
                {formatPlayCount(track.playCount)}
              </div>
              <small
                style={{ color: "#353535", fontFamily: "sans-serif" }}
              >
                plays
              </small>
            </div>
            <div className="text-center">
              <div
                className="fw-bold mb-1"
                style={{ color: "#ffc107", fontFamily: "sans-serif" }}
              >
                {formatPlayCount(track.weeklyPlays)}
              </div>
              <small
                style={{ color: "#353535", fontFamily: "sans-serif" }}
              >
                this week
              </small>
            </div>
          </div>

          {/* Duration */}
          <div className="me-4">
            <small
              style={{ color: "#353535", fontFamily: "sans-serif" }}
            >
              <i className="bi bi-clock me-1"></i>
              {track.duration}
            </small>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-2">
            <a
              href={`https://open.spotify.com/track/${track.spotifyId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
              style={{
                width: "40px",
                height: "40px",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
              }}
            >
              <i className="bi bi-spotify"></i>
            </a>
            <a
              href={`https://www.youtube.com/watch?v=${track.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
              style={{
                width: "40px",
                height: "40px",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
              }}
            >
              <i className="bi bi-play-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

