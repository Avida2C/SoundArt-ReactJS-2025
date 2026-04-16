import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FEATURE_FLAGS } from "../../constants";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { getSearchTargetPath } from "../../utils/moreSidebarSearch";

export default function MoreSidebar({ open, onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(getSearchTargetPath(query));
    onClose();
  };

  return (
    <div className="sa-more-overlay" onClick={handleBackdropClick}>
      <aside className="sa-more-panel">
        <div className="sa-more-header d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Explore SoundArt</h6>
          <button
            type="button"
            className="btn btn-sm btn-outline-light sa-more-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <form
          className="sa-more-search mt-3 mb-4"
          onSubmit={handleSearchSubmit}
          role="search"
        >
          <label htmlFor="more-sidebar-search" className="visually-hidden">
            Search artists, news, and concerts
          </label>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              id="more-sidebar-search"
              name="moreSidebarSearch"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search artists, news, concerts..."
              autoComplete="off"
              enterKeyHint="search"
            />
            <button
              type="submit"
              className="btn btn-warning sa-more-search-submit"
              aria-label="Search"
            >
              <i className="bi bi-search" aria-hidden="true" />
            </button>
          </div>
        </form>

        <nav className="sa-more-links">
          <p className="sa-more-section-label">Main</p>
          <Link to="/" className="sa-more-link" onClick={onClose}>
            Home
          </Link>
          <Link to="/artists" className="sa-more-link" onClick={onClose}>
            Artists
          </Link>
          <Link to="/news" className="sa-more-link" onClick={onClose}>
            News
          </Link>
          <Link to="/concerts" className="sa-more-link" onClick={onClose}>
            Concerts
          </Link>

          {FEATURE_FLAGS.communityEnabled && (
            <>
              <p className="sa-more-section-label mt-4">Community</p>
              <Link to="/social" className="sa-more-link" onClick={onClose}>
                Community Hub
              </Link>
            </>
          )}

          <p className="sa-more-section-label mt-4">Support</p>
          <Link to="/contact" className="sa-more-link" onClick={onClose}>
            Contact
          </Link>
          <Link to="/privacy-policy" className="sa-more-link" onClick={onClose}>
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="sa-more-link"
            onClick={onClose}
          >
            Terms of Service
          </Link>

          <p className="sa-more-section-label mt-4">Follow Us</p>
          <div className="sa-more-social-links">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="sa-more-social-link"
              aria-label="YouTube"
            >
              <SiYoutubeshorts />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="sa-more-social-link"
              aria-label="Instagram"
            >
              <RiInstagramFill />
              <span>Instagram</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="sa-more-social-link"
              aria-label="X"
            >
              <i className="bi bi-twitter-x"></i>
              <span>X</span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="sa-more-social-link"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
              <span>Facebook</span>
            </a>
          </div>
        </nav>
      </aside>
    </div>
  );
}

