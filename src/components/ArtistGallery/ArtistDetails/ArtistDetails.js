import React from 'react';
import ArtistName from './ArtistName';
import ArtistBio from './ArtistBio';

export default function ArtistDetails({ artist }) {
  if (!artist) return null;

  const containerStyle = {
    backgroundImage: `url(${artist.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  };

  return (
<div className="container artist-gallery position-relative" style={containerStyle}>
  <ArtistName name={artist.name} />
  <ArtistBio bio={artist.bio} artistId={artist.id} />
</div>

  );
}
