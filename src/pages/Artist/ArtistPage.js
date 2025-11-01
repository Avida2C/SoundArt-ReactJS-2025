import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { LoginGate } from "../../components/auth";
import {
  NewsletterSection,
  HeroSection,
  GetFeaturedAsArtist,
} from "../../components/layout";
import { LegendaryArtistsSection } from "../../components/ArtistGallery";
import artists from "../../data/Artist/artistData";
import { getArtistDetails } from "../../data/Artist/artistDetailsData";
import "../../styles/artists.css";

export default function ArtistPage() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const selectedArtist = artists.find((a) => a.id === Number(id));

  if (!selectedArtist) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="display-4 text-muted">Artist Not Found</h2>
            <p className="lead">The artist you're looking for doesn't exist.</p>
            <Link to="/artists" className="btn btn-warning">
              Back to Artists
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const artistDetails = getArtistDetails(selectedArtist);

  // Photos-only: label the tab as Photos
  const hasPhotos =
    Array.isArray(artistDetails.photos) && artistDetails.photos.length > 0;
  const mediaTabLabel = "Photos";

  // Helper function to format play counts
  const formatPlayCount = (count) => {
    if (count >= 1000000000) {
      return `${(count / 1000000000).toFixed(1)}B`;
    } else if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div>
      {/* Artist Header */}
      <section
        className="py-5"
        style={{
          background: "#191919",
        }}
      >
        <div className="container text-white">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol
              className="breadcrumb mb-0"
              style={{ backgroundColor: "transparent" }}
            >
              <li className="breadcrumb-item">
                <Link to="/" className="text-white-50 text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link
                  to="/artists"
                  className="text-white-50 text-decoration-none"
                >
                  Artists
                </Link>
              </li>
              <li
                className="breadcrumb-item active text-warning fw-semibold"
                aria-current="page"
              >
                {selectedArtist.name}
              </li>
            </ol>
          </nav>

          <div className="row mb-5">
            <div className="col-lg-4">
              <div className="position-relative">
                <img
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  className="img-fluid rounded shadow"
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <div className="position-absolute top-0 start-0 m-3">
                  <span className="badge bg-warning text-dark fs-6">
                    Featured Artist
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-warning mb-3">
                {selectedArtist.name}
              </h1>

              {/* Artist Info */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <h6 className="text-muted mb-1">Formed</h6>
                    <p className="mb-0 fw-bold">{artistDetails.formed}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <h6 className="text-muted mb-1">Origin</h6>
                    <p className="mb-0 fw-bold">{artistDetails.origin}</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3 bg-light rounded">
                    <h6 className="text-muted mb-1">Genres</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {artistDetails.genres.map((genre, index) => (
                        <span
                          key={index}
                          className="badge bg-warning text-dark"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3">
                <button className="btn btn-warning btn-lg">
                  <i className="bi bi-play-circle me-2"></i>
                  Listen Now
                </button>
                {isAuthenticated && (
                  <button className="btn btn-outline-warning btn-lg">
                    <i className="bi bi-heart me-2"></i>
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Content */}
      <section className="py-5">
        <div className="container">
          {/* Navigation Tabs */}
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "overview" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("overview")}
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "discography" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("discography")}
                  >
                    Discography
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "media" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("media")}
                  >
                    {mediaTabLabel}
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "music" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("music")}
                  >
                    Music
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "concerts" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("concerts")}
                  >
                    Concerts
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content">
                {activeTab === "overview" && (
                  <div className="row">
                    <div className="col-lg-8">
                      <h3 className="mb-3">About {selectedArtist.name}</h3>
                      <p className="lead mb-4">{artistDetails.fullBio}</p>

                      <h4 className="mb-3">Band Members</h4>
                      <div className="row g-3">
                        {artistDetails.members.map((member, index) => (
                          <div key={index} className="col-md-6">
                            <div className="p-3 border rounded">
                              <h6 className="mb-0">{member}</h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Quick Stats</h5>
                          <div className="row g-3">
                            <div className="col-6">
                              <div className="text-center p-2 bg-light rounded">
                                <h4 className="text-warning mb-1">
                                  {artistDetails.discography.length}
                                </h4>
                                <small className="text-muted">Albums</small>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="text-center p-2 bg-light rounded">
                                <h4 className="text-warning mb-1">50M+</h4>
                                <small className="text-muted">Streams</small>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="text-center p-2 bg-light rounded">
                                <h4 className="text-warning mb-1">
                                  {new Date().getFullYear() -
                                    parseInt(artistDetails.formed)}
                                </h4>
                                <small className="text-muted">
                                  Years Active
                                </small>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="text-center p-2 bg-light rounded">
                                <h4 className="text-warning mb-1">
                                  {artistDetails.members.length}
                                </h4>
                                <small className="text-muted">Members</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "discography" && (
                  <div>
                    <h3 className="mb-4">Discography</h3>
                    <div className="row g-4">
                      {artistDetails.discography.map((album, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card h-100 shadow-sm">
                            <img
                              src={album.image}
                              className="card-img-top"
                              alt={album.title}
                              style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-warning text-dark">
                                  {album.year}
                                </span>
                                <small className="text-muted">
                                  {album.type}
                                </small>
                              </div>
                              <h6 className="card-title">{album.title}</h6>
                              <small className="text-muted mt-auto">
                                {album.releaseDate}
                              </small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "media" && (
                  <div>
                    <h3 className="mb-4">{mediaTabLabel}</h3>
                    {hasPhotos && (
                      <div>
                        <div className="row g-4">
                          {artistDetails.photos.map((photo, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                              <div className="card h-100 shadow-sm">
                                <img
                                  src={photo.image}
                                  className="card-img-top"
                                  alt={photo.title}
                                  style={{
                                    height: "250px",
                                    objectFit: "cover",
                                  }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{photo.title}</h6>
                                  <p className="card-text text-muted small">
                                    {photo.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "music" && (
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
                                  Listen to {selectedArtist.name}
                                </h5>
                                <p className="text-muted mb-0">
                                  Stream their music on Spotify or watch videos
                                  on YouTube
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
                                    href={`https://www.youtube.com/results?search_query=${selectedArtist.name}`}
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
                                  <h6 className="mb-1 fw-bold">
                                    {track.title}
                                  </h6>
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
                                    <small className="text-muted">
                                      this week
                                    </small>
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
                                          {formatPlayCount(track.weeklyPlays)}{" "}
                                          plays this week
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
                                  <small className="text-muted">
                                    Streaming
                                  </small>
                                </div>
                              </div>
                              <div className="col-md-3 col-6">
                                <div className="text-center">
                                  <i
                                    className="bi bi-apple text-dark mb-2 d-block"
                                    style={{ fontSize: "2rem" }}
                                  ></i>
                                  <h6>Apple Music</h6>
                                  <small className="text-muted">
                                    Streaming
                                  </small>
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
                                  <small className="text-muted">
                                    CDs & Vinyl
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "concerts" && (
                  <div>
                    <h3 className="mb-4">Upcoming Concerts</h3>
                    <div className="row g-4">
                      {artistDetails.concerts.map((concert, index) => (
                        <div key={index} className="col-lg-6">
                          <div className="card h-100 shadow-sm border-0">
                            <div className="card-body p-4">
                              <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                  <h5 className="card-title mb-1">
                                    {concert.venue}
                                  </h5>
                                  <p className="text-muted mb-0">
                                    <i className="bi bi-geo-alt me-1"></i>
                                    {concert.city}
                                  </p>
                                </div>
                                <span
                                  className={`badge ${
                                    concert.status === "Sold Out"
                                      ? "bg-danger"
                                      : concert.status === "Limited"
                                      ? "bg-warning text-dark"
                                      : "bg-success"
                                  }`}
                                >
                                  {concert.status}
                                </span>
                              </div>

                              <div className="row g-3 mb-3">
                                <div className="col-6">
                                  <div className="text-center p-3 bg-light rounded">
                                    <i
                                      className="bi bi-calendar-event text-warning mb-2 d-block"
                                      style={{ fontSize: "1.5rem" }}
                                    ></i>
                                    <h6 className="mb-1">
                                      {new Date(
                                        concert.date
                                      ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                      })}
                                    </h6>
                                    <small className="text-muted">Date</small>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="text-center p-3 bg-light rounded">
                                    <i
                                      className="bi bi-currency-dollar text-warning mb-2 d-block"
                                      style={{ fontSize: "1.5rem" }}
                                    ></i>
                                    <h6 className="mb-1">{concert.price}</h6>
                                    <small className="text-muted">
                                      Price Range
                                    </small>
                                  </div>
                                </div>
                              </div>

                              <div className="d-grid gap-2">
                                {concert.status === "Sold Out" ? (
                                  <button
                                    className="btn btn-outline-secondary"
                                    disabled
                                  >
                                    <i className="bi bi-x-circle me-2"></i>Sold
                                    Out
                                  </button>
                                ) : (
                                  <button className="btn btn-warning">
                                    <i className="bi bi-ticket-perforated me-2"></i>
                                    Get Tickets
                                  </button>
                                )}
                                {isAuthenticated && (
                                  <button className="btn btn-outline-warning btn-sm">
                                    <i className="bi bi-heart me-2"></i>Add to
                                    Wishlist
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Concert Alert Signup */}
                    <div className="row mt-5">
                      <div className="col-12">
                        <div className="card bg-warning text-dark">
                          <div className="card-body text-center p-4">
                            <h4 className="card-title mb-3">
                              <i className="bi bi-bell me-2"></i>Never Miss a
                              Show!
                            </h4>
                            <p className="card-text mb-4">
                              Get notified when {selectedArtist.name} announces
                              new concerts in your area.
                            </p>
                            <div className="row g-3 justify-content-center">
                              <div className="col-md-6">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Enter your email address"
                                />
                              </div>
                              <div className="col-md-3">
                                <button className="btn btn-dark w-100">
                                  <i className="bi bi-envelope me-2"></i>
                                  Subscribe
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Legendary Artists Section */}
      <LegendaryArtistsSection
        artists={artists
          .filter((artist) => artist.id !== selectedArtist.id)
          .slice(0, 3)}
      />

      {/* Newsletter Section */}
      <NewsletterSection />

               {/* Get Featured as Artist Section */}
          <GetFeaturedAsArtist artistName={selectedArtist.name} />
    </div>
  );
}
