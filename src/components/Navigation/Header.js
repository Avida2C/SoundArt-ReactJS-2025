import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { AuthModal } from "../auth";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container">
          {/* Logo as clickable Home link */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span className="brand-text">Sound<span className="brand-accent">Art</span></span>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/artists">Artists</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/concerts">Concerts</Link>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/social">Community</Link>
                </li>
              )}
            </ul>

            {/* Authentication Section */}
            <ul className="navbar-nav">
              {isAuthenticated ? (
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-link nav-link dropdown-toggle d-flex align-items-center"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    style={{ border: 'none', background: 'none' }}
                  >
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="rounded-circle me-2"
                      style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                    />
                    <span className="d-none d-md-inline">{user.firstName}</span>
                  </button>
                  {showUserMenu && (
                    <div className="dropdown-menu show" style={{ right: 0, left: 'auto' }}>
                      <Link className="dropdown-item" to="/social" onClick={() => setShowUserMenu(false)}>
                        <i className="bi bi-person me-2"></i>My Profile
                      </Link>
                      <Link className="dropdown-item" to="/social" onClick={() => setShowUserMenu(false)}>
                        <i className="bi bi-heart me-2"></i>Favorites
                      </Link>
                      <Link className="dropdown-item" to="/social" onClick={() => setShowUserMenu(false)}>
                        <i className="bi bi-bookmark me-2"></i>Wishlist
                      </Link>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right me-2"></i>Sign Out
                      </button>
                    </div>
                  )}
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn btn-warning"
                    onClick={() => setShowAuthModal(true)}
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <AuthModal 
        show={showAuthModal}
        onHide={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
      />
    </>
  );
}
