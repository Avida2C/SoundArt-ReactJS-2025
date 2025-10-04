import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Concerts() {
  const { isAuthenticated } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample concerts data
  const concerts = [
    { 
      id: 1,
      artist: "The Beatles", 
      date: "2024-12-15", 
      venue: "Madison Square Garden", 
      city: "New York, NY", 
      price: "$150-500",
      image: "/images/thebeatles1967.jpg",
      status: "Sold Out",
      genre: "Rock",
      description: "Experience the magic of The Beatles in this once-in-a-lifetime tribute concert featuring rare performances and classic hits."
    },
    { 
      id: 2,
      artist: "Queen", 
      date: "2024-12-20", 
      venue: "Wembley Stadium", 
      city: "London, UK", 
      price: "£200-800",
      image: "/images/Queen_band.jpg",
      status: "Limited",
      genre: "Rock",
      description: "Join us for an epic Queen tribute featuring the greatest hits and spectacular stage production."
    },
    { 
      id: 3,
      artist: "Metallica", 
      date: "2025-01-10", 
      venue: "Staples Center", 
      city: "Los Angeles, CA", 
      price: "$200-600",
      image: "/images/Metallica.jpg",
      status: "Available",
      genre: "Metal",
      description: "Heavy metal legends Metallica bring their thunderous sound to Los Angeles in this must-see concert."
    },
    { 
      id: 4,
      artist: "AC/DC", 
      date: "2025-01-25", 
      venue: "Sydney Opera House", 
      city: "Sydney, Australia", 
      price: "A$180-550",
      image: "/images/ACDC.jpg",
      status: "Available",
      genre: "Rock",
      description: "Rock and roll thunder down under! AC/DC tribute band brings the high voltage energy to Sydney."
    },
    { 
      id: 5,
      artist: "Led Zeppelin", 
      date: "2025-02-14", 
      venue: "Royal Albert Hall", 
      city: "London, UK", 
      price: "£250-750",
      image: "/images/Led_Zeppelin.jpg",
      status: "Available",
      genre: "Rock",
      description: "Experience the legendary sound of Led Zeppelin in this spectacular tribute performance."
    },
    { 
      id: 6,
      artist: "Pink Floyd", 
      date: "2025-03-01", 
      venue: "Hollywood Bowl", 
      city: "Los Angeles, CA", 
      price: "$180-450",
      image: "/images/Pink_Floyd.jpg",
      status: "Limited",
      genre: "Progressive Rock",
      description: "A mesmerizing tribute to Pink Floyd featuring their greatest hits and stunning visual effects."
    },
    { 
      id: 7,
      artist: "The Rolling Stones", 
      date: "2025-03-15", 
      venue: "Tokyo Dome", 
      city: "Tokyo, Japan", 
      price: "¥25,000-80,000",
      image: "/images/Rolling_Stones.jpg",
      status: "Available",
      genre: "Rock",
      description: "Rock and roll legends tribute featuring the greatest hits from The Rolling Stones."
    },
    { 
      id: 8,
      artist: "Nirvana", 
      date: "2025-04-05", 
      venue: "Accor Arena", 
      city: "Paris, France", 
      price: "€120-400",
      image: "/images/Nirvana.jpg",
      status: "Available",
      genre: "Grunge",
      description: "Relive the grunge era with this powerful tribute to Nirvana and their iconic sound."
    }
  ];

  const genres = ['all', ...new Set(concerts.map(concert => concert.genre))];

  const filteredConcerts = concerts.filter(concert => {
    const matchesFilter = selectedFilter === 'all' || concert.genre === selectedFilter;
    const matchesSearch = concert.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         concert.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         concert.city.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Sold Out':
        return 'bg-danger';
      case 'Limited':
        return 'bg-warning text-dark';
      case 'Available':
        return 'bg-success';
      default:
        return 'bg-secondary';
    }
  };

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
                Live <span className="text-warning">Concerts</span>
              </h1>
              <p className="lead mb-4">
                Experience the magic of legendary artists in spectacular tribute concerts. From The Beatles to Queen, don't miss these unforgettable performances.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-warning btn-lg" onClick={() => document.querySelector('.concerts-section').scrollIntoView({ behavior: 'smooth' })}>
                  <i className="bi bi-ticket-perforated me-2"></i>View Concerts
                </button>
                <Link to="/artists" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-music-note me-2"></i>Explore Artists
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
                  alt="Live Concerts" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{maxHeight: '300px', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Search and Filter Section */}
          <section className="py-4 bg-light">
            <div className="container">
              <div className="row g-3 align-items-center">
                <div className="col-lg-6">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search concerts by artist, venue, or city..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="align-self-center text-muted">Filter by genre:</span>
                    {genres.map(genre => (
                      <button
                        key={genre}
                        className={`btn btn-sm ${selectedFilter === genre ? 'btn-warning' : 'btn-outline-warning'}`}
                        onClick={() => setSelectedFilter(genre)}
                      >
                        {genre === 'all' ? 'All' : genre}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Concerts Section */}
      <section className="py-5 concerts-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Upcoming Concerts</h2>
              <p className="lead text-muted">Don't miss these legendary performances</p>
            </div>
          </div>
          
          <div className="row g-4">
            {filteredConcerts.map((concert) => (
              <div key={concert.id} className="col-lg-6 col-xl-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <img 
                      src={concert.image} 
                      className="card-img-top" 
                      alt={concert.artist}
                      style={{height: '250px', objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className={`badge ${getStatusBadge(concert.status)}`}>
                        {concert.status}
                      </span>
                    </div>
                    <div className="position-absolute top-0 start-0 m-2">
                      <span className="badge bg-dark bg-opacity-75">
                        {concert.genre}
                      </span>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{concert.artist}</h5>
                    <p className="text-muted mb-2">
                      <i className="bi bi-geo-alt me-1"></i>{concert.venue}
                    </p>
                    <p className="text-muted mb-2">
                      <i className="bi bi-geo me-1"></i>{concert.city}
                    </p>
                    <p className="text-muted mb-2">
                      <i className="bi bi-calendar me-1"></i>
                      {new Date(concert.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-muted mb-3">
                      <i className="bi bi-currency-dollar me-1"></i>{concert.price}
                    </p>
                    <p className="card-text text-muted small flex-grow-1">
                      {concert.description}
                    </p>
                        <div className="mt-auto">
                          {concert.status === 'Sold Out' ? (
                            <button className="btn btn-outline-secondary w-100" disabled>
                              <i className="bi bi-x-circle me-2"></i>Sold Out
                            </button>
                          ) : (
                            <button className="btn btn-warning w-100">
                              <i className="bi bi-ticket-perforated me-2"></i>Get Tickets
                            </button>
                          )}
                          {isAuthenticated && (
                            <button className="btn btn-outline-warning btn-sm w-100 mt-2">
                              <i className="bi bi-heart me-2"></i>Add to Wishlist
                            </button>
                          )}
                        </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredConcerts.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-search text-muted mb-3 d-block" style={{fontSize: '3rem'}}></i>
              <h4 className="text-muted">No concerts found</h4>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Concert Alert Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="fw-bold mb-3">
                <i className="bi bi-bell text-warning me-2"></i>
                Never Miss a Concert
              </h3>
              <p className="lead text-muted mb-4">
                Get notified when your favorite artists announce new concerts in your area
              </p>
              <div className="row g-3 justify-content-center">
                <div className="col-md-6">
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="col-md-3">
                  <button className="btn btn-warning btn-lg w-100">
                    <i className="bi bi-envelope me-2"></i>Subscribe
                  </button>
                </div>
              </div>
              <small className="text-muted mt-3 d-block">
                We'll only send you concert alerts for artists you're interested in.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Venues Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="fw-bold mb-3">Featured Venues</h3>
              <p className="text-muted">Iconic venues where legends perform</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <i className="bi bi-building text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                  <h5 className="card-title">Madison Square Garden</h5>
                  <p className="card-text text-muted">New York, NY</p>
                  <small className="text-muted">The world's most famous arena</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <i className="bi bi-building text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                  <h5 className="card-title">Wembley Stadium</h5>
                  <p className="card-text text-muted">London, UK</p>
                  <small className="text-muted">The home of British music</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <i className="bi bi-building text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                  <h5 className="card-title">Hollywood Bowl</h5>
                  <p className="card-text text-muted">Los Angeles, CA</p>
                  <small className="text-muted">Iconic outdoor amphitheater</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


