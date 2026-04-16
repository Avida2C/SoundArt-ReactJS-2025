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
import {
  OverviewTab,
  DiscographyTab,
  MediaTab,
  MusicTab,
  ConcertsTab,
} from "../../components/ArtistTabs";
import { formatDateShort } from "../../utils/helpers";
import artists from "../../data/Artist/artistData";
import { getArtistDetails } from "../../data/Artist/artistDetailsData";
import { usePageTitle } from "../../hooks";
import "../../styles/artists.css";

export default function ArtistPage() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const selectedArtist = artists.find((a) => a.id === Number(id));

  usePageTitle(selectedArtist ? selectedArtist.name : "Artist");

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
              </div>
            </div>
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-warning mb-3">
                {selectedArtist.name}
              </h1>

              {/* Artist Info */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded" style={{ color: "#353535" }}>
                    <h6 className="text-muted mb-1">Formed</h6>
                    <p className="mb-0 fw-bold" style={{ color: "#353535" }}>{artistDetails.formed}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded" style={{ color: "#353535" }}>
                    <h6 className="text-muted mb-1">Origin</h6>
                    <p className="mb-0 fw-bold" style={{ color: "#353535" }}>{artistDetails.origin}</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3 bg-light rounded" style={{ color: "#353535" }}>
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
              <div className="d-flex gap-3 flex-wrap">
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
                {artistDetails.website && (
                  <a
                    href={artistDetails.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-lg"
                  >
                    <i className="bi bi-globe me-2"></i>
                    Visit Official Website
                  </a>
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
              <div className="artist-tabs-container">
                <ul className="nav nav-tabs">
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
              </div>

              {/* Tab Content */}
              <div className="tab-content">
                {activeTab === "overview" && (
                  <OverviewTab artist={selectedArtist} artistDetails={artistDetails} />
                )}

                {activeTab === "discography" && (
                  <DiscographyTab artistDetails={artistDetails} />
                )}

                {activeTab === "media" && (
                  <MediaTab artistDetails={artistDetails} mediaTabLabel={mediaTabLabel} />
                )}

                {activeTab === "music" && (
                  <MusicTab
                    artist={selectedArtist}
                    artistDetails={artistDetails}
                    formatPlayCount={formatPlayCount}
                  />
                )}

                {activeTab === "concerts" && (
                  <ConcertsTab
                    artist={selectedArtist}
                    artistDetails={artistDetails}
                    isAuthenticated={isAuthenticated}
                  />
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
