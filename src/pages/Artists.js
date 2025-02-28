import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Artists() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Artists</h1>
          <p>Welcome to the Artists page. Here, you can explore various artists featured in our gallery.</p>
        </Col>
      </Row>
    </Container>
  );
}
