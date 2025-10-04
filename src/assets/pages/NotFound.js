import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          <div className="error-page">
            <h1 className="display-1 text-warning fw-bold">404</h1>
            <h2 className="display-4 mb-4">Page Not Found</h2>
            <p className="lead text-muted mb-4">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/" className="btn btn-warning btn-lg">
                <i className="bi bi-house me-2"></i>
                Go Home
              </Link>
              <Link to="/artists" className="btn btn-outline-warning btn-lg">
                <i className="bi bi-music-note me-2"></i>
                Browse Artists
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
