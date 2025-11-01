import React, { useState } from "react";
import Card from "../Card";

/**
 * DiscographyTab - Displays artist albums and releases with pagination
 * @param {Object} artistDetails - Artist details object with discography array
 */
export default function DiscographyTab({ artistDetails }) {
  const albumsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  
  const albums = artistDetails.discography || [];
  const totalPages = Math.ceil(albums.length / albumsPerPage);
  
  // Get albums for current page
  const startIndex = (currentPage - 1) * albumsPerPage;
  const endIndex = startIndex + albumsPerPage;
  const currentAlbums = albums.slice(startIndex, endIndex);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`btn ${i === currentPage ? 'btn-warning' : 'btn-outline-warning'} mx-1`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="d-flex justify-content-end align-items-center mt-5 pagination">
        <button
          className="btn btn-outline-warning"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        {pages}
        <button
          className="btn btn-outline-warning"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    );
  };

  return (
    <div>
      <h2 className="mb-4 fw-bold" style={{ color: "#353535", fontFamily: "sans-serif" }}>
        Discography
      </h2>
      
      <div className="row g-4">
        {currentAlbums.map((album, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <Card
              image={album.image}
              title={album.title}
              description={album.releaseDate}
              cardType="artist"
            />
          </div>
        ))}
      </div>

      {renderPagination()}
    </div>
  );
}
