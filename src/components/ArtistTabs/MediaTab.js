import React from "react";

/**
 * MediaTab - Displays artist photos/media gallery
 * @param {Object} artistDetails - Artist details object with photos array
 * @param {string} mediaTabLabel - Label for the media tab (default: "Photos")
 */
export default function MediaTab({ artistDetails, mediaTabLabel = "Photos" }) {
  const hasPhotos =
    Array.isArray(artistDetails.photos) && artistDetails.photos.length > 0;

  return (
    <div>
      <h3 className="mb-4">{mediaTabLabel}</h3>
      {hasPhotos && (
        <div>
          <div className="row g-4">
            {artistDetails.photos.map((photo, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm">
                  <img
                    src={photo.image}
                    className="card-img-top"
                    alt={photo.title}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{photo.title}</h6>
                    <p className="card-text text-muted small">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
