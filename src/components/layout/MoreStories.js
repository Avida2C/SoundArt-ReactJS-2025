import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../News/ArticleCard";

/**
 * MoreStories - Component for displaying additional article cards in a horizontal layout
 * @param {Array} articles - Array of article objects to display (default: first 3)
 * @param {string} className - Additional CSS classes
 */
export default function MoreStories({ 
  articles = [], 
  className = "",
  showViewAllButton = true 
}) {
  // Default to first 3 articles if none provided
  const displayArticles = articles.length > 0 ? articles.slice(0, 3) : [];

  if (displayArticles.length === 0) {
    return null;
  }

  return (
    <section className={`mt-2 mb-4 ${className}`}>
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-dark fw-bold mb-0">More Stories</h2>
          {showViewAllButton && (
            <Link 
              to="/news" 
              className="more-stories-view-all-btn text-decoration-none text-uppercase btn btn-outline-warning"
            >
              View All Stories
            </Link>
          )}
        </div>

        {/* Article Cards */}
        <div className="row g-4">
          {displayArticles.map((article) => (
            <div key={article.id} className="col-lg-4 col-md-6">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

