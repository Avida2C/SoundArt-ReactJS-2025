import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { artists } from "../data"; // Ensure this path is correct

export default function ArtistPage() {
  const { id } = useParams(); // Get the artist ID from the URL
  const artist = artists.find((a) => a.id.toString() === id); // Convert id to string

  if (!artist) {
    return <h2 className="text-center mt-5">Artist Not Found</h2>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={12} className="text-center">
          <h1>{artist.name}</h1>
          <Image src={artist.image} alt={artist.name} fluid />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>{artist.bio}</p>
        </Col>
      </Row>
    </Container>
  );
}
