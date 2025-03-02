import React from "react";
import ArtistGallery from "../components/ArtistGallery/ArtistGallery";
import { Container} from "react-bootstrap";

export default function Artists() {
  return (
    <Container className="mt-4">
        <ArtistGallery />
    </Container>
  );
}