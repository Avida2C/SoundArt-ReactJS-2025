import React from 'react';
import ArtistName from './ArtistName';
import ArtistBio from './ArtistBio';

export default function ArtistDetails({ artist }) {
  if (!artist) return null;

  return (
    <div 
      className="container artist-gallery position-relative artist-details-container" 
      style={{ backgroundImage: `url(${artist.image})` }}
    >
      <ArtistName name={artist.name} />
      <ArtistBio bio={artist.bio} artistId={artist.id} />
    </div>
  );
}
