import React, { useState } from "react";
import ArtistDetails from "./ArtistDetails/ArtistDetails";
import ArtistList from "./ArtistList/ArtistList"; // ✅ Import fixed
import artists from "../../data/Artist/artistData"; // ✅ Correct path
 // ✅ Import fixed
import { getRandomInt } from "../../utils"; // Utility function for random integer
import "../../style/artists.css";

export default function ArtistGallery() {
  // Initialize the selected artist with a random artist
  const [selectedArtist, setSelectedArtist] = useState(
    artists[getRandomInt(artists.length)]
  );

  const handleArtistClick = (index) => {
    setSelectedArtist(artists[index]);
  };

  return (
    <>
      <ArtistDetails artist={selectedArtist} />
      <ArtistList artists={artists} onArtistClick={handleArtistClick} />
    </>
  );
}
