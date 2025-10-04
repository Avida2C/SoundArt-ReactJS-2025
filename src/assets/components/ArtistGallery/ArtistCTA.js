import React, { useState } from "react";
import ArtistDetails from "./ArtistDetails/ArtistDetails";
import artists from "../../data/Artist/artistData";
import { getRandomInt } from "../../../utils";
import "../../styles/artists.css";

export default function ArtistCTA() {
  // State for featured artist CTA (random showcase)
  const [featuredArtist, setFeaturedArtist] = useState(
    artists[getRandomInt(artists.length)]
  );

  const handleRandomFeaturedArtist = () => {
    const randomIndex = getRandomInt(artists.length);
    setFeaturedArtist(artists[randomIndex]);
  };

  return (
    <div className="artist-cta-container">
      {/* Featured Artist CTA - Independent random showcase */}
      <ArtistDetails artist={featuredArtist} />

      {/* Simple CTA Controls */}
      <div className="cta-controls text-center mt-4">
        <button
          className="btn btn-warning btn-lg"
          onClick={handleRandomFeaturedArtist}
        >
          <i className="bi bi-shuffle me-2"></i>
          Discover Another Artist
        </button>
      </div>
    </div>
  );
}
