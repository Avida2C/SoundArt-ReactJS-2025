import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { HeroSection, SectionTitle, NewsletterSection } from "../components/layout";
import { heroData } from "../data/heroData";
import SearchFilter from "../components/SearchFilter";
import { searchFilterConfigs } from "../data/searchFilterData";
import { sectionTitles } from "../data/sectionTitlesData";
import concertsData from "../data/concertsData";
import { LegendaryArtistsSection } from "../components/ArtistGallery";
import artistData from "../data/Artist/artistData";
import { getLegendarySectionDisplayArtists } from "../utils/artistAccess";
import ConcertCard from "../components/ConcertCard";
import { usePageTitle, useInfiniteScrollBatch } from "../hooks";
import InfiniteScrollSentinel from "../components/InfiniteScrollSentinel";

export default function Concerts() {
  const [searchParams] = useSearchParams();
  const qFromUrl = searchParams.get("q") ?? "";

  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState(qFromUrl);
  const [sortBy, setSortBy] = useState('name');
  usePageTitle("Concerts");

  useEffect(() => {
    setSearchTerm(qFromUrl);
  }, [qFromUrl]);

  const genres = ['all', ...new Set(concertsData.map(concert => concert.genre))];

  const filteredConcerts = useMemo(() => {
    let filtered = concertsData.filter(concert => {
      const matchesFilter = selectedFilter === 'all' || concert.genre === selectedFilter;
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        concert.artist.toLowerCase().includes(q) ||
        concert.venue.toLowerCase().includes(q) ||
        concert.city.toLowerCase().includes(q) ||
        (concert.country && concert.country.toLowerCase().includes(q));
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

  const {
    visibleItems: currentConcerts,
    sentinelRef,
    hasMore,
    allLoaded,
    isLoadingMore,
  } = useInfiniteScrollBatch(filteredConcerts, 12);

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

              <InfiniteScrollSentinel
                sentinelRef={sentinelRef}
                hasMore={hasMore}
                allLoaded={allLoaded}
                isLoadingMore={isLoadingMore}
              />
            </>
          )}
        </div>
      </section>


      {/* Legendary Artists Section */}
      <LegendaryArtistsSection artists={getLegendarySectionDisplayArtists(artistData)} />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}


