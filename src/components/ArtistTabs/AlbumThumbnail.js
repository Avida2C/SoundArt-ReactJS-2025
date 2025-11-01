import React from "react";

/**
 * AlbumThumbnail - Displays a single album thumbnail with cover, title, and release date
 * @param {Object} album - Album object with image, title, releaseDate
 */
export default function AlbumThumbnail({ album }) {
  return (
    <div
      className="card h-100 shadow-sm border-0"
      style={{
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <img
        src={album.image}
        className="card-img-top"
        alt={album.title}
        style={{
          height: "200px",
          objectFit: "cover",
          width: "100%",
        }}
      />
      <div className="card-body p-3">
        <h6
          className="card-title mb-2 fw-bold"
          style={{ color: "#353535", fontFamily: "sans-serif" }}
        >
          {album.title}
        </h6>
        <small
          className="text-muted"
          style={{ color: "#6c757d", fontFamily: "sans-serif" }}
        >
          {album.releaseDate}
        </small>
      </div>
    </div>
  );
}

