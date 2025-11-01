import React from "react";
import TrendingThisWeek from "./TrendingThisWeek";
import SongListItem from "./SongListItem";

/**
 * MusicTab - Displays top tracks with song list and trending sidebar
 * @param {Object} artist - Artist object
 * @param {Object} artistDetails - Artist details object with topTracks array
 * @param {Function} formatPlayCount - Function to format play counts
 */
export default function MusicTab({ artist, artistDetails, formatPlayCount }) {

  return (
    <div>
      <h2 className="mb-4 fw-bold" style={{ color: "#353535", fontFamily: "sans-serif" }}>
        Music
      </h2>

      <div className="row g-4">
        {/* Main Song List - Left Column */}
        <div className="col-lg-8">
          {/* Song List */}
          <div>
            {artistDetails.topTracks.map((track, index) => (
              <SongListItem
                key={index}
                track={track}
                index={index}
                formatPlayCount={formatPlayCount}
              />
            ))}
          </div>

          {/* Bottom Banner - More from Queen */}
          <div
            className="mt-5 p-4 rounded"
            style={{
              backgroundColor: "#ffc107",
              borderRadius: "4px 4px 0 0",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-music-note-beamed me-2"
                  style={{ color: "#353535", fontSize: "1.5rem" }}
                ></i>
                <h5
                  className="mb-0 fw-bold"
                  style={{ color: "#353535", fontFamily: "sans-serif" }}
                >
                  More from {artist.name}
                </h5>
              </div>
              <div className="d-flex gap-2">
                <a
                  href={`https://open.spotify.com/artist/${artistDetails.topTracks[0]?.spotifyId}`}
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
                  }}
                >
                  <i className="bi bi-spotify"></i>
                </a>
                <a
                  href={`https://www.youtube.com/results?search_query=${artist.name}`}
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
                  }}
                >
                  <i className="bi bi-play-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Sidebar - Right Column */}
        <div className="col-lg-4">
          <TrendingThisWeek
            topTracks={artistDetails.topTracks}
            formatPlayCount={formatPlayCount}
          />
        </div>
      </div>
    </div>
  );
}
