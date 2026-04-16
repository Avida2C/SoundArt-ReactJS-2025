import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

/**
 * GetFeaturedAsArtist - Call-to-action component for musicians
 * @param {string} artistName - Optional artist name to personalize the message
 */
export default function GetFeaturedAsArtist({ artistName = null }) {
  const displayText = artistName 
    ? `Showcase your sound and get featured next to artists like ${artistName}.`
    : "Showcase your sound and get featured alongside legendary artists.";

  return (
    <section className="py-5 py-md-6" style={{ backgroundColor: '#191919' }}>
      <div className="container text-white">
        <div className="row mb-2 mb-md-3">
          <div className="col-12 text-center">
            <SectionTitle
              title="Get Featured on SoundArt"
              titleIcon="bi-star-fill"
              subtitle="Built for artists and bands ready to grow their audience."
              variant="newsletter"
              textColor="white"
            />
          </div>
        </div>
        
        {/* Divider */}
        <div className="row">
          <div className="col-12">
            <hr className="border-dark opacity-75" style={{borderWidth: '2px'}} />
          </div>
        </div>
        
        
        {/* Features */}
        <div className="row py-4 py-md-5">
          <div className="col-lg-10 mx-auto">
            <div className="row g-4">
              <div className="col-4 col-md-4">
                <div className="text-center px-2">
                  <i className="bi bi-music-note-beamed text-warning d-block mb-3" style={{fontSize: '3rem'}}></i>
                  <h5 className="fw-bold mb-1">Upload Music</h5>
                  <small className="text-white-50">Share your tracks</small>
                </div>
              </div>
              <div className="col-4 col-md-4">
                <div className="text-center px-2">
                  <i className="bi bi-people text-warning d-block mb-3" style={{fontSize: '3rem'}}></i>
                  <h5 className="fw-bold mb-1">Build Fanbase</h5>
                  <small className="text-white-50">Connect with listeners</small>
                </div>
              </div>
              <div className="col-4 col-md-4">
                <div className="text-center px-2">
                  <i className="bi bi-graph-up text-warning d-block mb-3" style={{fontSize: '3rem'}}></i>
                  <h5 className="fw-bold mb-1">Grow Your Career</h5>
                  <small className="text-white-50">Reach new heights</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="row mb-4">
          <div className="col-12">
            <hr className="border-dark opacity-75" style={{borderWidth: '2px'}} />
          </div>
        </div>
        
                {/* Description */}
        <div className="row mb-4 mb-md-5">
          <div className="col-lg-10 mx-auto text-center">
            <p className="lead fw-semibold mb-2">
              {displayText} 
            </p>
            <p className="mb-0 text-white-50">
              Submit your profile in minutes and we'll review it for publishing.
            </p>
          </div>
        </div>
        {/* CTA Button */}
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <Link
              to="/contact"
              className="btn btn-warning btn-lg text-uppercase w-100 fw-bold py-3 px-5 d-inline-block"
              aria-label="Get featured as an artist"
            >
              <i className="bi bi-star-fill me-2"></i>Get Featured Now
            </Link>
            <p className="small text-white-50 mt-4 mb-0">
              Free submission • Fast review • Keep 100% creative ownership
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
