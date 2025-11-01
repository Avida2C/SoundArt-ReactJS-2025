import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/helpers";

/**
 * ArticleCard - Component for displaying article cards on the News page
 * Matches the design shown in the image
 */
export default function ArticleCard({ article }) {
  return (
    <div className="card h-100 border-0 article-card" style={{ minWidth: '280px', maxWidth: '100%', borderRadius: '4px' }}>
      {/* Image Section */}
      <div className="position-relative" style={{ height: '250px', overflow: 'hidden' }}>
        <img 
          src={article.image1} 
          className="w-100 h-100" 
          alt={article.title}
          style={{objectFit: 'cover'}}
        />
        
        {/* Category Badge - Top Left */}
        <div className="position-absolute top-0 start-0 m-2">
          <span className="badge bg-warning text-dark fw-bold px-2 py-1 rounded">
            {article.category}
          </span>
        </div>
        
        {/* Read Time Badge - Top Right */}
        <div className="position-absolute top-0 end-0 m-2">
          <span className="badge bg-dark bg-opacity-75 text-white fw-normal px-2 py-1 d-flex align-items-center">
            <i className="bi bi-clock me-1"></i>{article.readTime}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="card-body d-flex flex-column bg-white">
        {/* Author and Date */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <small className="text-muted d-flex align-items-center">
            <i className="bi bi-person me-1"></i>{article.author}
          </small>
          <small className="text-muted d-flex align-items-center">
            <i className="bi bi-calendar me-1"></i>{article.date}
          </small>
        </div>

        {/* Title */}
        <h5 className="card-title fw-bold mb-3 text-dark">
          {article.title}
        </h5>

        {/* Description */}
        <p className="card-text text-dark flex-grow-1 mb-3">
          {article.content[0].substring(0, 120)}...
        </p>

        {/* Tags */}
        <div className="mb-3">
          <div className="d-flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag, tagIndex) => (
              <span key={tagIndex} className="badge bg-light text-dark border-0 px-2 py-1">
                {tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span className="badge bg-light text-muted border-0 rounded-pill px-2 py-1">
                +{article.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Stats - Views and Likes */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <small className="text-muted d-flex align-items-center">
            <i className="bi bi-eye me-1"></i>{formatNumber(article.views)}
          </small>
          <small className="text-muted d-flex align-items-center">
            <i className="bi bi-heart me-1"></i>{formatNumber(article.likes)}
          </small>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link 
            to={`/article/${article.id}`} 
            className="btn btn-warning w-100 fw-bold text-uppercase rounded d-flex align-items-center justify-content-center"
          >
            Read Full Story
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

