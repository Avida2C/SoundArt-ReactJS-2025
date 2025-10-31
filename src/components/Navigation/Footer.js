import React from "react";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import "./footer.css"; // add the CSS below

export default function Footer() {
  return (
    <footer className="sa-footer bg-dark-900 text-light-300">
      <div className="container">
        <div className="row gy-5">
          {/* Brand / Intro */}
          <div className="col-lg-5">
            <h1 className="sa-brand mb-3">
              <span className="text-light-100">Sound</span>
              <span className="text-accent">Art</span>
            </h1>

            <p className="sa-intro">
              Discover the legends of music, explore rare stories,
              and dive deep into the world of iconic artists and
              bands that shaped generations.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="#" aria-label="YouTube" className="sa-social">
                <SiYoutubeshorts className="mb-1" />
              </a>
              <a href="#" aria-label="Instagram" className="sa-social">
                <RiInstagramFill className="mb-1"/>
              </a>
              <a href="#" aria-label="Twitter/X" className="sa-social">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook" className="sa-social">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="sa-heading text-accent mb-3">Quick Links</h6>
            <ul className="sa-links list-unstyled">
              <li><Link to="/" className="sa-link">Home</Link></li>
              <li><Link to="/artists" className="sa-link">Artists</Link></li>
              <li><Link to="/news" className="sa-link">News</Link></li>
              <li><Link to="/concerts" className="sa-link">Concerts</Link></li>
              <li><Link to="/contact" className="sa-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <h6 className="sa-heading text-accent mb-3">Contact Info</h6>

            <div className="sa-contact">
              <div className="sa-contact-row">
                <i className="bi bi-envelope text-accent me-2"></i>
                <span>info@soundart.com</span>
              </div>
              <div className="sa-contact-row">
                <i className="bi bi-telephone text-accent me-2"></i>
                <span>(356) 1234 1234</span>
              </div>
              <div className="sa-contact-row">
                <i className="bi bi-geo-alt text-accent me-2"></i>
                <span>112, Roy Buildings, JC Roads, RY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="sa-divider my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">© 2024 SoundArt. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <Link to="/privacy-policy" className="sa-link me-4">Privacy Policy</Link>
            <Link to="/terms-of-service" className="sa-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
