import React from "react";

/**
 * DiscographyTab - Displays artist albums and releases
 * @param {Object} artistDetails - Artist details object with discography array
 */
export default function DiscographyTab({ artistDetails }) {
  return (
    <div>
      <h3 className="mb-4">Discography</h3>
      <div className="row g-4">
        {artistDetails.discography.map((album, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm">
              <img
                src={album.image}
                className="card-img-top"
                alt={album.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="badge bg-warning text-dark">
                    {album.year}
                  </span>
                  <small className="text-muted">{album.type}</small>
                </div>
                <h6 className="card-title">{album.title}</h6>
                <small className="text-muted mt-auto">
                  {album.releaseDate}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
