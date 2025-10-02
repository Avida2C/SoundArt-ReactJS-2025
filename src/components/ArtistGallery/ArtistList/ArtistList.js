import React, { useState, useCallback } from "react";
import ArtistListItem from "./ArtistListItem";
import "../../../style/artists.css";

export default function ArtistList({ artists, onArtistClick }) {
  const [selectedArtistName, setSelectedArtistName] = useState("");

  const handleArtistClick = useCallback((artistName, index) => {
    console.log(`Artist clicked: ${artistName} (Index: ${index})`); // ✅ Debugging log
    setSelectedArtistName(artistName);
    onArtistClick(index);
  }, [onArtistClick]);

  return (
    <div className="container artist-grid ps-0">
      {artists.map((artist, index) => (
        <ArtistListItem
          key={artist.id} // ✅ Ensure unique key
          artist={artist}
          isSelected={selectedArtistName === artist.name}
          onClick={() => handleArtistClick(artist.name, index)}
        />
      ))}
    </div>
  );
}
