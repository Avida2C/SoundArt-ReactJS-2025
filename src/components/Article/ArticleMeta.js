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
      <div className="mt-5 pt-4 border-top">
        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="d-flex flex-wrap gap-2 w-100 mb-3">
            {article.tags.map((tag, index) => (
              <span key={index} className="badge bg-light text-dark border px-3 py-2">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Views / shares (left) — Share & Save stacked (right) */}
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div className="d-flex align-items-center gap-4 text-muted flex-shrink-0">
            <div className="d-flex align-items-center">
              <i className="bi bi-eye me-2" aria-hidden="true" />
              <span>{formatNumber(article.views)}</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-share me-2" aria-hidden="true" />
              <span>{formatNumber(article.shares || article.likes || 0)}</span>
            </div>
          </div>

          <div className="d-flex flex-column gap-2 article-meta-actions align-items-stretch">
            <button
              type="button"
              className="btn btn-outline-warning btn-sm text-nowrap"
              onClick={handleShare}
            >
              <i className="bi bi-share me-2" aria-hidden="true" />
              Share Article
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm text-nowrap"
              onClick={handleSave}
            >
              <i className="bi bi-bookmark me-2" aria-hidden="true" />
              Save for Later
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

