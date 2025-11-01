import React from "react";
import { Link } from "react-router-dom";
import { formatNumber, formatDateShort } from "../../utils/helpers";
import "../../styles/home.css";

/**
 * StoriesSidebar - Reusable sidebar component for displaying story list
 * @param {Array} stories - Array of article objects
 * @param {string} title - Sidebar title (default: "More Stories")
 * @param {string} viewAllLink - Link for "View All" button (default: "/news")
 * @param {string} className - Additional CSS classes
 */
export default function StoriesSidebar({ 
  stories = [], 
  title = "More Stories",
  viewAllLink = "/news",
  className = "" 
}) {
  return (
    <div className={`col-lg-4 ${className}`}>
      <div className="news-sidebar">
        <h4 className="fw-bold mb-4">{title}</h4>
        {stories.map((article) => (
          <div key={article.id} className="news-item">
            <Link to={`/article/${article.id}`} className="text-decoration-none text-dark">
              <div className="d-flex gap-3">
                <img 
                  src={article.image1} 
                  alt={article.title}
                  className="rounded news-thumbnail"
                />
                <div className="flex-grow-1">
                  <h6 className="mb-1 fw-semibold">{article.title}</h6>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <small className="text-muted d-flex align-items-center">
                      <i className="bi bi-calendar me-1"></i>
                      {formatDateShort(article.date)}
                    </small>
                    <small className="text-muted d-flex align-items-center">
                      <i className="bi bi-eye me-1"></i>
                      {formatNumber(article.views || 0)}
                    </small>
                    <small className="text-muted d-flex align-items-center">
                      <i className="bi bi-share me-1"></i>
                      {formatNumber(article.shares || article.likes || 0)}
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="mt-4">
          <Link 
            to={viewAllLink} 
            className="d-block text-decoration-none w-100 text-uppercase btn-outline-warning btn">
            View All Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

