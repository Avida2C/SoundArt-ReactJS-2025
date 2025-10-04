import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <h5 className="text-warning mb-3">SoundArt</h5>
            <p className="text-light">
              Discover amazing artists, read the latest music news, and connect with the music community.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-warning">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-warning">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-warning">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-warning">
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-warning mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none footer-link">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/artists" className="text-light text-decoration-none footer-link">Artists</Link>
              </li>
              <li className="mb-2">
                <Link to="/news" className="text-light text-decoration-none footer-link">News</Link>
              </li>
              <li className="mb-2">
                <Link to="/concerts" className="text-light text-decoration-none footer-link">Concerts</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5 mb-4">
            <h6 className="text-warning mb-3">Contact Info</h6>
            <div className="mb-2">
              <i className="bi bi-envelope me-2 text-warning"></i>
              <span className="text-light">info@soundart.com</span>
            </div>
            <div className="mb-2">
              <i className="bi bi-telephone me-2 text-warning"></i>
              <span className="text-light">(356) 1234 1234</span>
            </div>
            <div className="mb-2">
              <i className="bi bi-geo-alt me-2 text-warning"></i>
              <span className="text-light">112, Roy Buildings, JC Roads, RY</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0">
              © 2024 SoundArt. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/privacy-policy" className="text-light text-decoration-none footer-link me-3">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-light text-decoration-none footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

