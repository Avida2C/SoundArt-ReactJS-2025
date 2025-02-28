import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../App.css"


export default function Header() {
  return (
    <Navbar expand="lg" className="bg-light navbar shadow-sm">
      <Container>
        {/* ✅ Make the logo a clickable Home link */}
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Company Logo" style={{ height: "50px" }} /> {/* Adjust size if needed */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-3">
            <Nav.Link as={Link} to="/Artists">Artists</Nav.Link>
            <Nav.Link as={Link} to="/News" className="mx-3">News</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
