import React from "react";
import ArtistGallery from "../components/ArtistGallery/ArtistGallery";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="mt-4">
        <ArtistGallery />
    </Container>
  );
}