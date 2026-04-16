import React, { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { HeroSection, SectionTitle, NewsletterSection, GetFeaturedAsArtist } from "../../components/layout";
import { heroData } from "../../data/heroData";
import ArtistGallery from "../../components/ArtistGallery/ArtistGallery";
import SearchFilter from "../../components/SearchFilter";
import { searchFilterConfigs } from "../../data/searchFilterData";
import { sectionTitles } from "../../data/sectionTitlesData";
import artistData from "../../data/Artist/artistData";
import UpcomingConcerts from "../../components/UpcomingConcerts";
import { usePageTitle, useInfiniteScrollBatch } from "../../hooks";
import InfiniteScrollSentinel from "../../components/InfiniteScrollSentinel";
import "../../styles/artists.css";

export default function Artists() {
  const [searchParams] = useSearchParams();
  const qFromUrl = searchParams.get("q") ?? "";

  const [searchTerm, setSearchTerm] = useState(qFromUrl);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  usePageTitle("Artists");

  useEffect(() => {
    setSearchTerm(qFromUrl);
  }, [qFromUrl]);

  // Mock genres (in real app, this would come from artist data)
  const genres = ['all', 'Rock', 'Metal', 'Pop', 'Alternative', 'Punk'];
  
  const filteredAndSortedArtists = useMemo(() => {
    let filtered = artistData.filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artist.bio.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = selectedFilter === 'all'; // Simplified - would filter by actual genre if available
      return matchesSearch && matchesFilter;
    });

    // Featured artists stay at the top; then apply chosen sort within each group
    filtered.sort((a, b) => {
      const aFeat = a.featured ? 1 : 0;
      const bFeat = b.featured ? 1 : 0;
      if (bFeat !== aFeat) return bFeat - aFeat;
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popularity':
          return b.id - a.id;
        case 'year':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedFilter, sortBy]);

  const {
    visibleItems: currentArtists,
    sentinelRef,
    hasMore,
    allLoaded,
    isLoadingMore,
  } = useInfiniteScrollBatch(filteredAndSortedArtists, 12);

  // Sample upcoming concerts data
  const upcomingConcerts = [
    { 
      artist: "The Beatles", 
      date: "2024-12-15", 
      venue: "Madison Square Garden", 
      city: "New York, NY", 
      price: "$150-500",
      image: "/images/beatles/thebeatles1967.jpg"
    },
    { 
      artist: "Queen", 
      date: "2024-12-20", 
      venue: "Wembley Stadium", 
      city: "London, UK", 
      price: "£200-800",
      image: "/images/queen/Queen_band.jpg"
    },
    { 
      artist: "Metallica", 
      date: "2025-01-10", 
      venue: "Staples Center", 
      city: "Los Angeles, CA", 
      price: "$200-600",
      image: "/images/roster/Metallica.jpg"
    },
    { 
      artist: "AC/DC", 
      date: "2025-01-25", 
      venue: "Sydney Opera House", 
      city: "Sydney, Australia", 
      price: "A$180-550",
      image: "/images/roster/ACDC.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={heroData.artists.title}
        titleHighlight={heroData.artists.titleHighlight}
        description={heroData.artists.description}
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
            sortOptions={Object.entries(searchFilterConfigs.artists.sortOptions).map(([value, label]) => ({
              value,
              label
            }))}
            resultCount={filteredAndSortedArtists.length}
            totalCount={artistData.length}
            resultCountFormat={searchFilterConfigs.artists.resultCountFormat}
            searchPlaceholder={searchFilterConfigs.artists.searchPlaceholder}
          />
        </div>
      </section>

      {/* Section Title */}
      <SectionTitle
        title={sectionTitles.artists.title}
        subtitle={sectionTitles.artists.subtitle}
      />

      {/* Artists Gallery Section */}
      <section className="pb-5">
        <div className="container">
          <ArtistGallery artists={currentArtists} />
          <InfiniteScrollSentinel
            sentinelRef={sentinelRef}
            hasMore={hasMore}
            allLoaded={allLoaded}
            isLoadingMore={isLoadingMore}
          />
        </div>
      </section>

      {/* Upcoming Concerts Section */}
      <UpcomingConcerts concerts={upcomingConcerts} />


      {/* Newsletter Section */}
      <NewsletterSection />

      <GetFeaturedAsArtist />
    </div>
  );
}