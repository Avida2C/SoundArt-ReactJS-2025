import React, { useState, useMemo } from "react";
import ArtistDetails from "./ArtistDetails/ArtistDetails";
import ArtistList from "./ArtistList/ArtistList";
import artists from "../../data/Artist/artistData";
import { getRandomInt } from "../../utils";
import "../../styles/artists.css";

export default function ArtistGallery() {
  // Separate state for featured artist CTA (random, independent)
  const [featuredArtist, setFeaturedArtist] = useState(
    artists[getRandomInt(artists.length)]
  );
  
  // State for search and filtering (independent of featured artist)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Get unique genres from artists data
  const genres = useMemo(() => {
    const genreSet = new Set();
    artists.forEach(artist => {
      if (artist.genres) {
        artist.genres.forEach(genre => genreSet.add(genre));
      }
    });
    return Array.from(genreSet).sort();
  }, []);

  // Filter and sort artists
  const filteredAndSortedArtists = useMemo(() => {
    let filtered = artists.filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artist.bio.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGenre = selectedGenre === "all" || 
        (artist.genres && artist.genres.includes(selectedGenre));
      
      return matchesSearch && matchesGenre;
    });

    // Sort artists
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "popularity":
          return (b.popularity || 0) - (a.popularity || 0);
        case "year":
          return (a.formed || 0) - (b.formed || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedGenre, sortBy]);

  const handleArtistClick = (index) => {
    // This now only affects the artist list selection, not the featured CTA
    console.log(`Artist clicked: ${filteredAndSortedArtists[index].name}`);
  };

  const handleRandomFeaturedArtist = () => {
    const randomIndex = getRandomInt(artists.length);
    setFeaturedArtist(artists[randomIndex]);
  };

  return (
    <div className="artist-gallery-container">
      {/* Featured Artist CTA - Independent random showcase */}
      <ArtistDetails artist={featuredArtist} />

      {/* Search and Filter Controls */}
      <div className="gallery-controls mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-lg-4 col-md-6">
            <div className="search-box">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search artists..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setSearchTerm("")}
                  >
                    <i className="bi bi-x"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-3 col-sm-6">
            <select
              className="form-select"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="all">All Genres</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
          
          <div className="col-lg-2 col-md-3 col-sm-6">
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="popularity">Sort by Popularity</option>
              <option value="year">Sort by Year</option>
            </select>
          </div>
          
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`btn ${viewMode === 'grid' ? 'btn-warning' : 'btn-outline-warning'}`}
                onClick={() => setViewMode('grid')}
              >
                <i className="bi bi-grid-3x3-gap"></i>
              </button>
              <button
                type="button"
                className={`btn ${viewMode === 'list' ? 'btn-warning' : 'btn-outline-warning'}`}
                onClick={() => setViewMode('list')}
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 col-sm-6">
            <button
              className="btn btn-outline-warning w-100"
              onClick={handleRandomFeaturedArtist}
            >
              <i className="bi bi-shuffle me-2"></i>
              New Featured
            </button>
          </div>
        </div>
        
        {/* Results Summary */}
        <div className="results-summary mt-3">
          <small className="text-muted">
            Showing {filteredAndSortedArtists.length} of {artists.length} artists
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedGenre !== "all" && ` in ${selectedGenre}`}
          </small>
        </div>
      </div>

      {/* Artist List */}
      <ArtistList 
        artists={filteredAndSortedArtists} 
        onArtistClick={handleArtistClick}
        viewMode={viewMode}
        selectedArtistId={null}
      />
    </div>
  );
}
