import React from "react";
import { formatNumber } from "../../utils/helpers";

/**
 * ArticleMeta - Component for displaying article metadata (tags, engagement metrics, actions)
 * @param {Object} article - Article object with tags, views, shares, etc.
 * @param {Function} onShare - Optional callback for share action
 * @param {Function} onSave - Optional callback for save action
 */
export default function ArticleMeta({ article, onShare, onSave }) {
  const handleShare = (e) => {
    e.preventDefault();
    if (onShare) {
      onShare();
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave();
    }
  };

  return (
    <>
      {/* Tags, Engagement Metrics */}
      <div className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top">
        {/* Article Tags */}
        {article.tags && article.tags.length > 0 ? (
          <div className="d-flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span key={index} className="badge bg-light text-dark border px-3 py-2">
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {/* Engagement Metrics */}
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center text-muted">
            <i className="bi bi-eye me-2"></i>
            <span>{formatNumber(article.views)}</span>
          </div>
          <div className="d-flex align-items-center text-muted">
            <i className="bi bi-share me-2"></i>
            <span>{formatNumber(article.shares || article.likes || 0)}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2 article-meta-actions" style={{ marginTop: '16px' }}>
        <button 
          className="btn btn-outline-warning btn-sm"
          onClick={handleShare}
        >
          <i className="bi bi-share me-2"></i>Share Article
        </button>
        <button 
          className="btn btn-outline-secondary btn-sm"
          onClick={handleSave}
        >
          <i className="bi bi-bookmark me-2"></i>Save for Later
        </button>
      </div>
    </>
  );
}

