import React, { useState, useCallback } from "react";
import ArtistListItem from "./ArtistListItem";
import "../../../styles/artists.css";

export default function ArtistList({ artists, onArtistClick, viewMode = "grid", selectedArtistId }) {
  const [selectedArtistName, setSelectedArtistName] = useState("");

  const handleArtistClick = useCallback((artistName, index) => {
    console.log(`Artist clicked: ${artistName} (Index: ${index})`);
    setSelectedArtistName(artistName);
    onArtistClick(index);
  }, [onArtistClick]);

  if (artists.length === 0) {
    return (
      <div className="no-results text-center py-5">
        <div className="mb-4">
          <i className="bi bi-search text-muted" style={{fontSize: '4rem'}}></i>
        </div>
        <h4 className="text-muted mb-3">No artists found</h4>
        <p className="text-muted">Try adjusting your search criteria or filters</p>
      </div>
    );
  }

  return (
    <div className={`artist-list-container ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
      <div className={`container ${viewMode === 'grid' ? 'artist-grid' : 'artist-list'} ps-0`}>
        {artists.map((artist, index) => (
          <ArtistListItem
            key={artist.id}
            artist={artist}
            isSelected={selectedArtistId === artist.id}
            onClick={() => handleArtistClick(artist.name, index)}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}
