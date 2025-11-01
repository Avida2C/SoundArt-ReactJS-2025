import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

/**
 * GetFeaturedAsArtist - Call-to-action component for musicians
 * @param {string} artistName - Optional artist name to personalize the message
 */
export default function GetFeaturedAsArtist({ artistName = null }) {
  const displayText = artistName 
    ? `Join our platform and get featured alongside legendary artists like ${artistName}.`
    : "Join our platform and get featured alongside legendary artists.";

  return (
    <section className="py-5" style={{ backgroundColor: '#191919' }}>
      <div className="container text-white">
        <div className="row">
          <div className="col-12 text-center">
            <SectionTitle
              title="Get Featured as an Artist"
              titleIcon="bi-star-fill"
              subtitle="Are you a musician or band looking to reach a wider audience?"
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
        <div className="row py-5">
          <div className="col-lg-10 mx-auto">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="text-center">
                  <i className="bi bi-music-note-beamed text-warning d-block" style={{fontSize: '3rem'}}></i>
                  <h5 className="fw-bold m-0 p-0">Upload Music</h5>
                  <small className="text-white-50 m-0 p-0">Share your tracks</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <i className="bi bi-people text-warning d-block" style={{fontSize: '3rem'}}></i>
                  <h5 className="fw-bold m-0 p-0">Build Fanbase</h5>
                  <small className="text-white-50 m-0 p-0" >Connect with listeners</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <i className="bi bi-graph-up text-warning d-block" style={{fontSize: '3rem'}}></i>
                  <h5 className="fw-bold m-0 p-0">Grow Your Career</h5>
                  <small className="text-white-50 m-0 p-0">Reach new heights</small>
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
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto text-center">
            <p className="lead m-0 p-0">
              {displayText} 
            </p>
            <p className="m-0 p-0">
              Showcase your music, connect with fans, and grow your following.
            </p>
          </div>
        </div>
        {/* CTA Button */}
        <div className="row mt-0 pt-0">
          <div className="col-lg-8 mx-auto text-center">
            <Link to="/contact" className="btn btn-warning btn-lg text-uppercase w-100 fw-bold py-3 px-5 d-inline-block">
              <i className="bi bi-music-note me-2"></i>Apply Now
            </Link>
            <p className="small text-white-50 mt-3 mb-0">
              Free to join • No setup fees • Start earning today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
