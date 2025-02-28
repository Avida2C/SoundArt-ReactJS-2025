import React, { useState } from "react";
import ArtistDetails from "./ArtistDetails/ArtistDetails";
import ArtistList from "./ArtistList/ArtistList";
import { artists } from "../../data"; // Ensure this is the correct path to your data
import { getRandomInt } from "../../utils"; // Utility function for random integer

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
