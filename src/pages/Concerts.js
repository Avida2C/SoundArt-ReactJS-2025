import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { HeroSection, SectionTitle, NewsletterSection } from "../components/layout";
import { heroData } from "../data/heroData";
import { useAuth } from "../contexts/AuthContext";
import SearchFilter from "../components/SearchFilter";
import { searchFilterConfigs } from "../data/searchFilterData";
import { sectionTitles } from "../data/sectionTitlesData";
import concertsData from "../data/concertsData";
import { LegendaryArtistsSection } from "../components/ArtistGallery";
import artistData from "../data/Artist/artistData";

export default function Concerts() {
  const { isAuthenticated } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

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
      <section className="py-5 concerts-section">
        <div className="container">
          <div className="row g-4">
            {filteredConcerts.map((concert) => (
              <div key={concert.id} className="col-lg-6 col-xl-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <img 
                      src={concert.image} 
                      className="card-img-top" 
                      alt={concert.artist}
                      style={{height: '250px', objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className={`badge ${getStatusBadge(concert.status)}`}>
                        {concert.status}
                      </span>
                    </div>
                    <div className="position-absolute top-0 start-0 m-2">
                      <span className="badge bg-dark bg-opacity-75">
                        {concert.genre}
                      </span>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{concert.artist}</h5>
                    <p className="text-muted mb-2">
                      <i className="bi bi-geo-alt me-1"></i>{concert.venue}
                    </p>
                    <p className="text-muted mb-2">
                      <i className="bi bi-geo me-1"></i>{concert.city}
                    </p>
                    <p className="text-muted mb-2">
                      <i className="bi bi-calendar me-1"></i>
                      {new Date(concert.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-muted mb-3">
                      <i className="bi bi-currency-dollar me-1"></i>{concert.price}
                    </p>
                    <p className="card-text text-muted small flex-grow-1">
                      {concert.description}
                    </p>
                        <div className="mt-auto">
                          {concert.status === 'Sold Out' ? (
                            <button className="btn btn-outline-secondary w-100" disabled>
                              <i className="bi bi-x-circle me-2"></i>Sold Out
                            </button>
                          ) : (
                            <button className="btn btn-warning w-100">
                              <i className="bi bi-ticket-perforated me-2"></i>Get Tickets
                            </button>
                          )}
                          {isAuthenticated && (
                            <button className="btn btn-outline-warning btn-sm w-100 mt-2">
                              <i className="bi bi-heart me-2"></i>Add to Wishlist
                            </button>
                          )}
                        </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredConcerts.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-search text-muted mb-3 d-block" style={{fontSize: '3rem'}}></i>
              <h4 className="text-muted">No concerts found</h4>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
            </div>
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


