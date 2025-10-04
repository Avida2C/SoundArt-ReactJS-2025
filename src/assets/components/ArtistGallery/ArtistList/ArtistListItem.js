import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";

export default function ArtistListItem({ artist, isSelected, onClick, viewMode = "grid" }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isAuthenticated } = useAuth();

  // Extract genres from bio for display
  const extractGenres = (bio) => {
    const genreKeywords = ['rock', 'pop', 'metal', 'alternative', 'punk', 'progressive', 'psychedelic', 'folk', 'jazz', 'blues'];
    const foundGenres = genreKeywords.filter(keyword => bio.toLowerCase().includes(keyword));
    return foundGenres.slice(0, 2).map(genre => genre.charAt(0).toUpperCase() + genre.slice(1));
  };

  const genres = extractGenres(artist.bio);

  if (viewMode === "list") {
    return (
            <div
              className={`artist-list-item ${isSelected ? "active" : ""} ${isHovered ? "hovered" : ""}`}
              onClick={onClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className="artist-list-image" 
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${artist.image})` }}
              ></div>
        <div className="artist-list-content">
          <div className="artist-list-info">
            <h5 className="artist-list-name">{artist.name}</h5>
            <p className="artist-list-bio">{artist.bio.substring(0, 120)}...</p>
            <div className="artist-list-genres">
              {genres.map((genre, index) => (
                <span key={index} className="genre-tag">{genre}</span>
              ))}
            </div>
          </div>
          <div className="artist-list-actions">
            <Link 
              to={`/artist/${artist.id}`} 
              className="btn btn-warning btn-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="bi bi-eye me-1"></i>View
            </Link>
            {isAuthenticated && (
              <button 
                className="btn btn-outline-warning btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to favorites functionality
                }}
              >
                <i className="bi bi-heart me-1"></i>Like
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
          <div
            className={`artist-item ${isSelected ? "active" : ""} ${isHovered ? "hovered" : ""}`}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${artist.image})` }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
      <div className="artist-item-overlay">
        <div className="artist-item-content">
          <h5 className="artist-item-name">{artist.name}</h5>
          <div className="artist-item-genres">
            {genres.map((genre, index) => (
              <span key={index} className="genre-badge">{genre}</span>
            ))}
          </div>
          <div className="artist-item-actions">
            <Link 
              to={`/artist/${artist.id}`} 
              className="btn btn-warning btn-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="bi bi-eye"></i>
            </Link>
            {isAuthenticated && (
              <button 
                className="btn btn-outline-light btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to favorites functionality
                }}
              >
                <i className="bi bi-heart"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
