import React from "react";
import { Link } from "react-router-dom";
import ArtistGallery from "../../assets/components/ArtistGallery/ArtistGallery";
import "../../styles/artists.css";

export default function Artists() {

  // Sample upcoming concerts data
  const upcomingConcerts = [
    { 
      artist: "The Beatles", 
      date: "2024-12-15", 
      venue: "Madison Square Garden", 
      city: "New York, NY", 
      price: "$150-500",
      image: "/images/thebeatles1967.jpg"
    },
    { 
      artist: "Queen", 
      date: "2024-12-20", 
      venue: "Wembley Stadium", 
      city: "London, UK", 
      price: "£200-800",
      image: "/images/Queen_band.jpg"
    },
    { 
      artist: "Metallica", 
      date: "2025-01-10", 
      venue: "Staples Center", 
      city: "Los Angeles, CA", 
      price: "$200-600",
      image: "/images/Metallica.jpg"
    },
    { 
      artist: "AC/DC", 
      date: "2025-01-25", 
      venue: "Sydney Opera House", 
      city: "Sydney, Australia", 
      price: "A$180-550",
      image: "/images/ACDC.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
      }}>
        <div className="container text-white">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Discover <span className="text-warning">Legendary Artists</span>
              </h1>
              <p className="lead mb-4">
                Explore the icons who shaped music history. From The Beatles to Queen, discover their stories, music, and legacy. Browse our complete collection of legendary artists.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-warning btn-lg" onClick={() => document.querySelector('.artist-gallery-section').scrollIntoView({ behavior: 'smooth' })}>
                  <i className="bi bi-music-note me-2"></i>Browse Artists
                </button>
                <Link to="/concerts" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-ticket-perforated me-2"></i>View Concerts
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="position-relative">
                <div className="hero-glow position-absolute" style={{
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(255,193,7,0.3) 0%, transparent 70%)',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: -1
                }}></div>
                <img 
                  src="/images/thebeatles1967.jpg" 
                  alt="Music Legends" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{maxHeight: '300px', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Artists Gallery Section */}
      <section className="py-5 artist-gallery-section">
        <div className="container">
          <ArtistGallery />
        </div>
      </section>

      {/* Upcoming Concerts Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Upcoming Concerts</h2>
              <p className="lead text-muted">Don't miss these legendary performances</p>
            </div>
          </div>
          
          <div className="row g-4">
            {upcomingConcerts.map((concert, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <img 
                      src={concert.image} 
                      className="card-img-top" 
                      alt={concert.artist}
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-warning text-dark">Live</span>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{concert.artist}</h5>
                    <p className="text-muted mb-2">
                      <i className="bi bi-geo-alt me-1"></i>{concert.venue}
                    </p>
                    <p className="text-muted mb-2">
                      <i className="bi bi-calendar me-1"></i>
                      {new Date(concert.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                    <p className="text-muted mb-3">
                      <i className="bi bi-currency-dollar me-1"></i>{concert.price}
                    </p>
                    <div className="mt-auto">
                      <Link to="/concerts" className="btn btn-warning w-100">
                        <i className="bi bi-ticket-perforated me-2"></i>Get Tickets
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/concerts" className="btn btn-outline-warning btn-lg">
              <i className="bi bi-calendar-event me-2"></i>View All Concerts
            </Link>
          </div>
        </div>
      </section>

      {/* Get Featured as Artist Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-lg" style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
              }}>
                <div className="card-body text-white p-5">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <h3 className="card-title mb-3">
                        <i className="bi bi-star-fill text-warning me-2"></i>
                        Get Featured as an Artist
                      </h3>
                      <p className="card-text mb-4">
                        Are you a musician or band looking to reach a wider audience? Join our platform and get featured alongside legendary artists like The Beatles, Queen, and Metallica. Showcase your music, connect with fans, and grow your following.
                      </p>
                      <div className="row g-3">
                        <div className="col-md-4">
                          <div className="text-center">
                            <i className="bi bi-music-note-beamed text-warning mb-2 d-block" style={{fontSize: '2rem'}}></i>
                            <h6>Upload Music</h6>
                            <small className="text-muted">Share your tracks</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center">
                            <i className="bi bi-people text-warning mb-2 d-block" style={{fontSize: '2rem'}}></i>
                            <h6>Build Fanbase</h6>
                            <small className="text-muted">Connect with listeners</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center">
                            <i className="bi bi-graph-up text-warning mb-2 d-block" style={{fontSize: '2rem'}}></i>
                            <h6>Grow Your Career</h6>
                            <small className="text-muted">Reach new heights</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center">
                      <div className="p-4">
                        <i className="bi bi-mic text-warning mb-3 d-block" style={{fontSize: '4rem'}}></i>
                        <h5 className="mb-3">Ready to Get Started?</h5>
                        <Link to="/contact" className="btn btn-warning btn-lg mb-3 w-100">
                          <i className="bi bi-plus-circle me-2"></i>Apply Now
                        </Link>
                        <p className="small text-muted mb-0">
                          Free to join • No setup fees • Start earning today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">10+</h3>
                <p className="mb-0">Legendary Artists</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">1000+</h3>
                <p className="mb-0">Albums & Singles</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">50+</h3>
                <p className="mb-0">Years of Music History</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">24/7</h3>
                <p className="mb-0">Music Discovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}