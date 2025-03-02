import React from 'react';
import { Container } from "react-bootstrap";
import ArtistName from './ArtistName';
import ArtistBio from './ArtistBio';
import './ArtistDetails.css';

export default function ArtistDetails({ artist }) {
  if (!artist) return null;

  const containerStyle = {
    backgroundImage: `url(${artist.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Container className="artist-gallery position-relative" style={containerStyle}>
      <ArtistName name={artist.name} />
      <ArtistBio bio={artist.bio} artistId={artist.id} />

    </Container>
  );
}
