import React, { useState, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import ArtistListItem from './ArtistListItem';
import './ArtistList.css';

export default function ArtistList({ artists, onArtistClick }) {
  const [selectedArtistName, setSelectedArtistName] = useState('');

  const handleArtistClick = useCallback((artistName, index) => {
    console.log(`Artist clicked: ${artistName}`);
    setSelectedArtistName(artistName);
    onArtistClick(index);
  }, [onArtistClick]);

  return (
    <Container className="artist-grid ps-0">
      {artists.map((artist, index) => (
        <ArtistListItem
          key={artist.name}
          artist={artist}
          isSelected={selectedArtistName === artist.name}
          onClick={() => handleArtistClick(artist.name, index)}
        />
      ))}
    </Container>
  );
}
