import React, { useState } from "react";
import ConcertCard from "../ConcertCard";
import concertsData from "../../data/concertsData";

/**
 * ConcertsTab - Displays upcoming concerts and subscription form
 * Uses ConcertCard component with pagination
 * @param {Object} artist - Artist object
 * @param {Object} artistDetails - Artist details object with concerts array
 * @param {boolean} isAuthenticated - Whether user is authenticated
 */
export default function ConcertsTab({ artist, artistDetails, isAuthenticated }) {
  const concertsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  
  const concerts = artistDetails.concerts || [];
  const totalPages = Math.ceil(concerts.length / concertsPerPage);
  
  // Get concerts for current page
  const startIndex = (currentPage - 1) * concertsPerPage;
  const endIndex = startIndex + concertsPerPage;
  const currentConcerts = concerts.slice(startIndex, endIndex);

  const resolveConcertId = (concert) => {
    const exactMatch = concertsData.find(
      (item) =>
        item.artist === artist.name &&
        item.date === concert.date &&
        item.venue === concert.venue
    );
    if (exactMatch?.id) {
      return exactMatch.id;
    }

    // Fallback: use any concert from the same artist.
    const artistMatch = concertsData.find((item) => item.artist === artist.name);
    if (artistMatch?.id) {
      return artistMatch.id;
    }

    return concertsData[0]?.id ?? null;
  };
  
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
        Upcoming Concerts
      </h2>
      
      <div className="row g-4">
        {currentConcerts.map((concert, index) => (
          <div key={index} className="col-lg-3 col-md-6">
            <ConcertCard 
              concert={{
                ...concert,
                id: concert.id ?? resolveConcertId(concert),
                artist: artist.name,
                image: artist.image || concert.image
              }} 
              isAuthenticated={isAuthenticated}
              hideImage={true}
            />
          </div>
        ))}
      </div>

      {renderPagination()}

    </div>
  );
}
