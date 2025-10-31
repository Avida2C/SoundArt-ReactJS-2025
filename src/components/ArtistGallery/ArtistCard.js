import React from "react";
import { Link } from "react-router-dom";

/**
 * ArtistCard - Reusable artist card component
 * @param {Object} artist - Artist object with {id, name, image, bio}
 * @param {string} className - Additional CSS classes
 */
export default function ArtistCard({ artist, className = "" }) {
  return (
    <div className={`col-lg-4 col-md-6 ${className}`}>
      <div className="artist-card card border-0 overflow-hidden position-relative" style={{ minHeight: '280px', height: '280px', padding: '8px' }}>
        {/* Background Image - fills entire card */}
        <img 
          src={artist.image} 
          alt={artist.name}
          style={{ 
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            borderRadius: '4px'
          }}
        />
        
        {/* Text Content - bottom left, above button */}
        <div className="position-absolute text-white" style={{ zIndex: 1, bottom: '70px', left: '24px', right: '24px', maxWidth: '70%' }}>
          <h5 className="card-title fw-bold" style={{ fontSize: '1.75rem', lineHeight: '1.2', marginBottom: '4px', marginTop: 0 }}>
            {artist.name}
          </h5>
          <p className="card-text" style={{ 
            fontSize: '0.95rem', 
            lineHeight: '1.6', 
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: 0,
            wordBreak: 'break-word'
          }}>
            {artist.bio}
          </p>
        </div>
        
        {/* Button - bottom with 8px padding on sides */}
        <div className="position-absolute bottom-0 start-0 w-100" style={{ zIndex: 1, padding: '8px' }}>
          <Link 
            to={`/artist/${artist.id}`} 
            className="cta-bar text-decoration-none text-uppercase d-block w-100 text-center"
            style={{ 
              color: '#353535',
              fontWeight: '700',
              padding: '14px 18px',
              borderRadius: '4px'
            }}
          >
            Explore Artist
          </Link>
        </div>
      </div>
    </div>
  );
}

