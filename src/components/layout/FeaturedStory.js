import React from "react";
import { Link } from "react-router-dom";
import { formatDateShort } from "../../utils/helpers";

/**
 * FeaturedStory - Reusable featured story component
 * @param {Object} article - Article object with {id, title, image1, content, author, date}
 * @param {string} className - Additional CSS classes
 */
export default function FeaturedStory({ article, className = "" }) {
  return (
    <div className={`col-lg-8 ${className}`}>
      <div className="featured-news-card card border-0 shadow-lg overflow-hidden h-100">
        <div className="row g-0 h-100">
          <div className="col-md-6">
            <img 
              src={article.image1} 
              className="img-fluid h-100 article-image" 
              alt={article.title}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body h-100 d-flex flex-column justify-content-center p-4">
              <span className="badge bg-warning text-dark mb-2 w-100 py-2">Featured Story</span>
              <h3 className="card-title fw-bold">{article.title}</h3>
              <p className="card-text text-muted h-100">
                {article.content[0].substring(0, 200)}...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-person me-1"></i>{article.author} • 
                  <i className="bi bi-calendar ms-2 me-1"></i>{formatDateShort(article.date)}
                </small>
              </div>
              <Link to={`/article/${article.id}`} className="cta-bar d-block text-decoration-none w-100 text-uppercase mt-2">
                Read Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
