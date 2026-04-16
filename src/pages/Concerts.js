import React, { useState, useMemo } from "react";
import { HeroSection, SectionTitle, NewsletterSection } from "../components/layout";
import { heroData } from "../data/heroData";
import SearchFilter from "../components/SearchFilter";
import { searchFilterConfigs } from "../data/searchFilterData";
import { sectionTitles } from "../data/sectionTitlesData";
import concertsData from "../data/concertsData";
import { LegendaryArtistsSection } from "../components/ArtistGallery";
import artistData from "../data/Artist/artistData";
import ConcertCard from "../components/ConcertCard";
import { usePageTitle } from "../hooks";

export default function Concerts() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [concertsPerPage] = useState(12);

  usePageTitle("Concerts");

  const genres = ['all', ...new Set(concertsData.map(concert => concert.genre))];

  const filteredConcerts = useMemo(() => {
    let filtered = concertsData.filter(concert => {
      const matchesFilter = selectedFilter === 'all' || concert.genre === selectedFilter;
      const matchesSearch = concert.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           concert.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           concert.city.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    // Sort concerts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.artist.localeCompare(b.artist);
        case 'date':
          return new Date(a.date) - new Date(b.date);
        case 'venue':
          return a.venue.localeCompare(b.venue);
        case 'price':
          // Simple price comparison (extract first number)
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedFilter, searchTerm, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredConcerts.length / concertsPerPage);
  const startIndex = (currentPage - 1) * concertsPerPage;
  const endIndex = startIndex + concertsPerPage;
  const currentConcerts = filteredConcerts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedFilter, sortBy]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Sold Out':
        return 'bg-danger';
      case 'Limited':
        return 'bg-warning text-dark';
      case 'Available':
        return 'bg-success';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={heroData.concerts.title}
        titleHighlight={heroData.concerts.titleHighlight}
        description={heroData.concerts.description}
      />

          {/* Search and Filter Section */}
          <section className="py-4 bg-light">
            <div className="container">
              <SearchFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                filterValue={selectedFilter}
                onFilterChange={setSelectedFilter}
                filterOptions={genres.map(genre => ({
                  value: genre,
                  label: genre === 'all' ? 'All Genres' : genre
                }))}
                sortValue={sortBy}
                onSortChange={setSortBy}
                sortOptions={Object.entries(searchFilterConfigs.concerts.sortOptions).map(([value, label]) => ({
                  value,
                  label
                }))}
                resultCount={filteredConcerts.length}
                totalCount={concertsData.length}
                resultCountFormat={searchFilterConfigs.concerts.resultCountFormat}
                searchPlaceholder={searchFilterConfigs.concerts.searchPlaceholder}
              />
            </div>
          </section>

      {/* Section Title */}
      <SectionTitle
        title={sectionTitles.concerts.title}
        subtitle={sectionTitles.concerts.subtitle}
      />

      {/* Concerts Section */}
      <section className="pb-5 concerts-section">
        <div className="container">
          {currentConcerts.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-search text-muted mb-3 d-block" style={{fontSize: '3rem'}}></i>
              <h4 className="text-muted">No concerts found</h4>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {currentConcerts.map((concert) => (
                  <div key={concert.id} className="col-lg-3 col-md-6">
                    <ConcertCard concert={concert} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {renderPagination()}
            </>
          )}
        </div>
      </section>


      {/* Legendary Artists Section */}
      <LegendaryArtistsSection artists={artistData.slice(0, 3)} />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}


