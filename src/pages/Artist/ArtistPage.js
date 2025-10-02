import React from "react";
import { useParams } from "react-router-dom";
import artists from "../../data/Artist/artistData"; // ✅ Ensure correct path
import "../../style/artists.css"; // ✅ Ensure styles are linked

export default function ArtistPage() {
  const { id } = useParams(); // Get the artist ID from the URL
  console.log("URL ID:", id); // ✅ Check if ID is correct

  const selectedArtist = artists.find((a) => a.id === Number(id)); // ✅ Convert ID to number

  if (!selectedArtist) {
    return <h2 className="text-center mt-5">Artist Not Found</h2>;
  }

  return (
    <div className="container mt-4 text-center">
      <h1 className="artist-name">{selectedArtist.name}</h1>
      <img
        src={`${process.env.PUBLIC_URL}${selectedArtist.image}`}
        alt={selectedArtist.name}
        className="artist-image img-fluid"
      />
      <p className="artist-bio">{selectedArtist.bio}</p>
    </div>
  );
}
