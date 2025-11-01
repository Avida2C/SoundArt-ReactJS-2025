import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/helpers";

/**
 * Universal Card Component
 * Used for displaying News Articles, Artists, Concerts, etc.
 * 
 * @param {Object} props
 * @param {string} props.image - Main image URL
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description/body text
 * @param {string} props.buttonText - Button text
 * @param {string} props.buttonLink - Button link/to path
 * @param {Array} props.topLeftBadge - Array of {text, className} for top-left badge
 * @param {Array} props.topRightBadge - Array of {text, icon, className} for top-right badge
 * @param {Array} props.metadata - Array of {icon, text} for metadata items above title
 * @param {Array} props.tags - Array of tag strings
 * @param {Array} props.stats - Array of {icon, value} for stats below content
 * @param {string} props.cardType - 'news', 'artist', 'concert' for different layouts
 * @param {Function} props.onButtonClick - Optional button click handler
 * @param {boolean} props.buttonDisabled - Whether button is disabled
 * @param {string} props.secondaryButtonText - Optional secondary button text
 * @param {Function} props.onSecondaryButtonClick - Optional secondary button click handler
 */
export default function Card({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  topLeftBadge,
  topRightBadge,
  metadata,
  tags,
  stats,
  cardType = 'news',
  onButtonClick,
  buttonDisabled = false,
  secondaryButtonText,
  onSecondaryButtonClick
}) {
  
  const renderButton = () => {
    if (buttonDisabled) {
      const disabledClass = "btn btn-outline-secondary w-100 fw-bold text-uppercase rounded d-flex align-items-center justify-content-center";
      return (
        <button 
          className={disabledClass}
          disabled={true}
        >
          <i className="bi bi-x-circle me-2"></i>
          {buttonText}
        </button>
      );
    }
    
    const buttonClass = "btn btn-warning w-100 fw-bold text-uppercase rounded d-flex align-items-center justify-content-center";
    
    if (onButtonClick) {
      return (
        <button 
          className={buttonClass}
          onClick={onButtonClick}
          disabled={buttonDisabled}
        >
          {buttonText}
    
        </button>
      );
    }
    
    if (buttonLink) {
      return (
        <Link to={buttonLink} className={buttonClass}>
          {buttonText}
        </Link>
      );
    }
    
    // If no onButtonClick or buttonLink, render as button without link
    return (
      <button className={buttonClass} disabled={true}>
        {buttonText}
      </button>
    );
  };

  return (
    <div className="card h-100 border-0 article-card" style={{ minWidth: '280px', maxWidth: '100%', borderRadius: '4px' }}>
      {/* Image Section */}
      <div className="position-relative" style={{ height: '250px', overflow: 'hidden' }}>
        <img 
          src={image} 
          className="w-100 h-100" 
          alt={title}
          style={{objectFit: 'cover'}}
        />
        
        {/* Top Left Badge */}
        {topLeftBadge && (
          <div className="position-absolute top-0 start-0 m-2">
            {topLeftBadge.map((badge, idx) => (
              <span key={idx} className={`badge ${badge.className} px-2 py-1 rounded`}>
                {badge.icon && <i className={`bi ${badge.icon} me-1`}></i>}
                {badge.text}
              </span>
            ))}
          </div>
        )}
        
        {/* Top Right Badge */}
        {topRightBadge && (
          <div className="position-absolute top-0 end-0 m-2">
            {topRightBadge.map((badge, idx) => (
              <span key={idx} className={`badge ${badge.className} px-2 py-1 d-flex align-items-center`}>
                {badge.icon && <i className={`bi ${badge.icon} me-1`}></i>}
                {badge.text}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="card-body d-flex flex-column bg-white">
        {/* Metadata - Author, Date, etc. */}
        {metadata && metadata.length > 0 && (
          <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap">
            {metadata.map((meta, idx) => (
              <small key={idx} className="text-muted d-flex align-items-center">
                {meta.icon && <i className={`bi ${meta.icon} me-1`}></i>}
                {meta.text}
              </small>
            ))}
          </div>
        )}

        {/* Title */}
        <h5 className="card-title fw-bold mb-3 text-dark">
          {title}
        </h5>

        {/* Description */}
        {description && (
          <p className="card-text text-dark flex-grow-1 mb-3">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mb-3">
            <div className="d-flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, tagIndex) => (
                <span key={tagIndex} className="badge bg-light text-dark border-0 px-2 py-1">
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="badge bg-light text-muted border-0 rounded-pill px-2 py-1">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Stats - Views, Likes, etc. */}
        {stats && stats.length > 0 && (
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
            {stats.map((stat, idx) => (
              <small key={idx} className="text-muted d-flex align-items-center">
                {stat.icon && <i className={`bi ${stat.icon} me-1`}></i>}
                {stat.value}
              </small>
            ))}
          </div>
        )}

        {/* CTA Button */}
        {(buttonText || secondaryButtonText) && (
          <div className="mt-auto">
            {renderButton()}
            {secondaryButtonText && (
              <button 
                className="btn btn-outline-warning btn-sm w-100 mt-2"
                onClick={onSecondaryButtonClick}
              >
                <i className="bi bi-heart me-2"></i>{secondaryButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

