import React from "react";
import { Link } from "react-router-dom";
import artistData from "../../data/Artist/artistData";

export default function ArtistGallery() {
  const artists = artistData;

  return (
    <div>
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-6 fw-bold">Artist Gallery</h2>
          <p className="text-muted mb-0">Browse legendary artists and explore their stories</p>
        </div>
      </div>

      <div className="row g-4">
        {artists.map((artist) => (
          <div key={artist.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="position-relative">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="card-img-top"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)'
                }}>
                  <h6 className="text-white mb-0">{artist.name}</h6>
                </div>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-muted flex-grow-1 mb-3">{artist.bio.substring(0, 100)}...</p>
                <Link to={`/artist/${artist.id}`} className="btn btn-warning w-100">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


