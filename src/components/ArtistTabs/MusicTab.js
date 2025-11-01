import React from "react";

/**
 * MusicTab - Displays top tracks, music player, and platforms
 * @param {Object} artist - Artist object
 * @param {Object} artistDetails - Artist details object with topTracks array
 * @param {Function} formatPlayCount - Function to format play counts
 */
export default function MusicTab({ artist, artistDetails, formatPlayCount }) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Most Popular Tracks</h3>
        <div className="d-flex align-items-center gap-3">
          <div className="text-center">
            <div className="h4 mb-0 text-warning">
              {formatPlayCount(
                artistDetails.topTracks.reduce(
                  (sum, track) => sum + track.playCount,
                  0
                )
              )}
            </div>
            <small className="text-muted">Total Streams</small>
          </div>
          <div className="text-center">
            <div className="h4 mb-0 text-warning">
              {formatPlayCount(
                artistDetails.topTracks.reduce(
                  (sum, track) => sum + track.weeklyPlays,
                  0
                )
              )}
            </div>
            <small className="text-muted">This Week</small>
          </div>
        </div>
      </div>

      {/* Music Player Section */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card bg-dark text-white">
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h5 className="mb-2">
                    <i className="bi bi-music-note-beamed text-warning me-2"></i>
                    Listen to {artist.name}
                  </h5>
                  <p className="text-muted mb-0">
                    Stream their music on Spotify or watch videos on YouTube
                  </p>
                </div>
                <div className="col-md-4 text-end">
                  <div className="d-flex gap-2 justify-content-end">
                    <a
                      href={`https://open.spotify.com/artist/${artistDetails.topTracks[0]?.spotifyId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success"
                    >
                      <i className="bi bi-spotify me-2"></i>
                      Spotify
                    </a>
                    <a
                      href={`https://www.youtube.com/results?search_query=${artist.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-danger"
                    >
                      <i className="bi bi-youtube me-2"></i>
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Tracks List */}
      <div className="row g-3">
        {artistDetails.topTracks.map((track, index) => (
          <div key={index} className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-3">
                <div className="row align-items-center">
                  <div className="col-md-1 text-center">
                    <span
                      className={`badge fw-bold ${
                        index === 0
                          ? "bg-warning text-dark"
                          : index === 1
                          ? "bg-secondary text-white"
                          : index === 2
                          ? "bg-warning text-dark"
                          : "bg-light text-dark"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className="col-md-4">
                    <h6 className="mb-1 fw-bold">{track.title}</h6>
                    <small className="text-muted">
                      {track.album} • {track.releaseYear}
                    </small>
                  </div>
                  <div className="col-md-2">
                    <div className="text-center">
                      <div className="fw-bold text-warning">
                        {formatPlayCount(track.playCount)}
                      </div>
                      <small className="text-muted">plays</small>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="text-center">
                      <div className="fw-bold text-success">
                        {formatPlayCount(track.weeklyPlays)}
                      </div>
                      <small className="text-muted">this week</small>
                    </div>
                  </div>
                  <div className="col-md-1 text-center">
                    <small className="text-muted">
                      <i className="bi bi-clock me-1"></i>
                      {track.duration}
                    </small>
                  </div>
                  <div className="col-md-2">
                    <div className="d-flex gap-1">
                      <a
                        href={`https://open.spotify.com/track/${track.spotifyId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success btn-sm"
                      >
                        <i className="bi bi-play-fill"></i>
                      </a>
                      <a
                        href={`https://www.youtube.com/watch?v=${track.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-danger btn-sm"
                      >
                        <i className="bi bi-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Tracks */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card border-warning">
            <div className="card-body p-4">
              <h5 className="card-title mb-3">
                <i className="bi bi-graph-up-arrow text-warning me-2"></i>
                Trending This Week
              </h5>
              <div className="row g-3">
                {artistDetails.topTracks
                  .sort((a, b) => b.weeklyPlays - a.weeklyPlays)
                  .slice(0, 3)
                  .map((track, index) => (
                    <div key={index} className="col-md-4">
                      <div className="d-flex align-items-center p-3 bg-light rounded">
                        <div className="me-3">
                          <span className="badge bg-warning text-dark fw-bold">
                            #{index + 1}
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">{track.title}</h6>
                          <small className="text-muted">
                            <i className="bi bi-play-circle me-1"></i>
                            {formatPlayCount(track.weeklyPlays)} plays this week
                          </small>
                        </div>
                        <div className="text-end">
                          <i className="bi bi-arrow-up text-success"></i>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Music Platforms */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card bg-light">
            <div className="card-body p-4">
              <h5 className="card-title mb-3">
                <i className="bi bi-music-note-list me-2"></i>
                Available on All Major Platforms
              </h5>
              <div className="row g-3">
                <div className="col-md-3 col-6">
                  <div className="text-center">
                    <i
                      className="bi bi-spotify text-success mb-2 d-block"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h6>Spotify</h6>
                    <small className="text-muted">Streaming</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center">
                    <i
                      className="bi bi-apple text-dark mb-2 d-block"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h6>Apple Music</h6>
                    <small className="text-muted">Streaming</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center">
                    <i
                      className="bi bi-youtube text-danger mb-2 d-block"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h6>YouTube</h6>
                    <small className="text-muted">Videos</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center">
                    <i
                      className="bi bi-vinyl text-warning mb-2 d-block"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h6>Physical</h6>
                    <small className="text-muted">CDs & Vinyl</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
