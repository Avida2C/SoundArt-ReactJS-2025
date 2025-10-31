import React from "react";
import { Link } from "react-router-dom";

export default function ArtistCTA() {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="mb-3 mb-md-0">
          <h5 className="mb-2">Discover More Legendary Artists</h5>
          <p className="text-muted mb-0">Explore detailed profiles, rare photos, and stories.</p>
        </div>
        <Link to="/artists" className="btn btn-warning">
          <i className="bi bi-music-note-beamed me-2"></i>
          Browse Artists
        </Link>
      </div>
    </div>
  );
}


