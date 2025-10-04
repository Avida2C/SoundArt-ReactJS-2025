import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Concerts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedDate, setSelectedDate] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  // Comprehensive concerts data
  const concertsData = [
    {
      id: 1,
      artist: "The Beatles",
      date: "2024-12-15",
      venue: "Madison Square Garden",
      city: "New York, NY",
      country: "USA",
      price: "$150-500",
      status: "Sold Out",
      image: "/images/thebeatles1967.jpg",
      genre: "Rock",
      description: "Experience the magic of The Beatles in this once-in-a-lifetime tribute concert featuring rare performances and classic hits."
    },
    {
      id: 2,
      artist: "Queen",
      date: "2024-12-20",
      venue: "Wembley Stadium",
      city: "London, UK",
      country: "UK",
      price: "£200-800",
      status: "Limited",
      image: "/images/Queen_band.jpg",
      genre: "Rock",
      description: "Queen + Adam Lambert bring their spectacular show to Wembley Stadium with all the greatest hits and theatrical performances."
    },
    {
      id: 3,
      artist: "Metallica",
      date: "2025-01-10",
      venue: "Staples Center",
      city: "Los Angeles, CA",
      country: "USA",
      price: "$200-600",
      status: "Available",
      image: "/images/Metallica.jpg",
      genre: "Metal",
      description: "Metallica returns to Los Angeles with their explosive live show featuring tracks from their latest album and classic thrash metal hits."
    },
    {
      id: 4,
      artist: "AC/DC",
      date: "2025-01-25",
      venue: "Sydney Opera House",
      city: "Sydney, Australia",
      country: "Australia",
      price: "A$180-550",
      status: "Available",
      image: "/images/ACDC.jpg",
      genre: "Rock",
      description: "AC/DC brings their thunderous rock show to the iconic Sydney Opera House for an unforgettable night of high-voltage rock."
    },
    {
      id: 5,
      artist: "Pink Floyd",
      date: "2025-02-14",
      venue: "Royal Albert Hall",
      city: "London, UK",
      country: "UK",
      price: "£150-400",
      status: "Available",
      image: "/images/pinkfloyd.jpg",
      genre: "Progressive Rock",
      description: "A tribute to Pink Floyd featuring their greatest hits performed with stunning visuals and immersive sound experience."
    },
    {
      id: 6,
      artist: "Led Zeppelin",
      date: "2025-02-28",
      venue: "Hollywood Bowl",
      city: "Los Angeles, CA",
      country: "USA",
      price: "$250-700",
      status: "Limited",
      image: "/images/thumbnail01.jpg",
      genre: "Rock",
      description: "Experience the legendary sound of Led Zeppelin in this spectacular tribute concert featuring all their greatest hits."
    },
    {
      id: 7,
      artist: "The Rolling Stones",
      date: "2025-03-15",
      venue: "Accor Arena",
      city: "Paris, France",
      country: "France",
      price: "€180-600",
      status: "Available",
      image: "/images/thumbnail02.jpg",
      genre: "Rock",
      description: "The Rolling Stones bring their timeless rock and roll to Paris with Mick Jagger's electrifying stage presence."
    },
    {
      id: 8,
      artist: "Black Sabbath",
      date: "2025-03-30",
      venue: "Tokyo Dome",
      city: "Tokyo, Japan",
      country: "Japan",
      price: "¥25,000-80,000",
      status: "Available",
      image: "/images/thumbnail03.jpg",
      genre: "Metal",
      description: "Black Sabbath tribute featuring the heavy metal pioneers' most iconic songs in the heart of Tokyo."
    }
  ];

  const cities = ["all", "New York, NY", "London, UK", "Los Angeles, CA", "Sydney, Australia", "Paris, France", "Tokyo, Japan"];
  const dates = ["all", "December 2024", "January 2025", "February 2025", "March 2025"];

  const filteredConcerts = useMemo(() => {
    let filtered = [...concertsData];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(concert =>
        concert.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concert.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concert.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // City filter
    if (selectedCity !== "all") {
      filtered = filtered.filter(concert => concert.city === selectedCity);
    }

    // Date filter
    if (selectedDate !== "all") {
      const [month, year] = selectedDate.split(" ");
      filtered = filtered.filter(concert => {
        const concertDate = new Date(concert.date);
        return concertDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) === selectedDate;
      });
    }

    // Sort
    if (sortBy === "date") {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "artist") {
      filtered.sort((a, b) => a.artist.localeCompare(b.artist));
    } else if (sortBy === "price") {
      filtered.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    }

    return filtered;
  }, [searchTerm, selectedCity, selectedDate, sortBy]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Sold Out":
        return "bg-danger";
      case "Limited":
        return "bg-warning text-dark";
      case "Available":
        return "bg-success";
      default:
        return "bg-secondary";
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
                Upcoming <span className="text-warning">Concerts</span>
              </h1>
              <p className="lead mb-4">
                Don't miss the chance to see legendary artists live! From The Beatles to Queen, discover amazing concerts and get your tickets today.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-warning btn-lg">
                  <i className="bi bi-ticket-perforated me-2"></i>Buy Tickets
                </button>
                <button className="btn btn-outline-light btn-lg">
                  <i className="bi bi-bell me-2"></i>Get Alerts
                </button>
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
            <div className="col-lg-4">
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-search"></i></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search artists, venues, or cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-2">
              <select 
                className="form-select" 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="all">All Cities</option>
                {cities.slice(1).map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-2">
              <select 
                className="form-select" 
                value={selectedDate} 
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="all">All Dates</option>
                {dates.slice(1).map(date => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-2">
              <select 
                className="form-select" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="artist">Sort by Artist</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
            <div className="col-lg-2">
              <div className="text-end">
                <span className="text-muted">
                  {filteredConcerts.length} concerts found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerts Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredConcerts.map((concert) => (
              <div key={concert.id} className="col-lg-6 col-xl-4">
                <div className="card h-100 shadow-sm border-0 concert-card">
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
                      <span className="badge bg-dark text-warning">
                        {concert.genre}
                      </span>
                    </div>
                  </div>
                  
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{concert.artist}</h5>
                    
                    <div className="mb-3">
                      <p className="text-muted mb-1">
                        <i className="bi bi-geo-alt me-2 text-warning"></i>
                        {concert.venue}
                      </p>
                      <p className="text-muted mb-1">
                        <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
                        {concert.city}, {concert.country}
                      </p>
                      <p className="text-muted mb-1">
                        <i className="bi bi-calendar-event me-2 text-warning"></i>
                        {new Date(concert.date).toLocaleDateString('en-US', { 
                          weekday: 'long',
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric'
                        })}
                      </p>
                      <p className="text-muted mb-3">
                        <i className="bi bi-currency-dollar me-2 text-warning"></i>
                        {concert.price}
                      </p>
                    </div>

                    <p className="card-text text-muted small flex-grow-1">
                      {concert.description}
                    </p>

                    <div className="mt-auto">
                      {concert.status === "Sold Out" ? (
                        <button className="btn btn-outline-secondary w-100" disabled>
                          <i className="bi bi-x-circle me-2"></i>Sold Out
                        </button>
                      ) : (
                        <div className="d-grid gap-2">
                          <button className="btn btn-warning">
                            <i className="bi bi-ticket-perforated me-2"></i>Get Tickets
                          </button>
                          <button className="btn btn-outline-warning btn-sm">
                            <i className="bi bi-heart me-2"></i>Add to Wishlist
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredConcerts.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-search text-muted" style={{fontSize: '4rem'}}></i>
              <h3 className="text-muted mt-3">No concerts found</h3>
              <p className="text-muted">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Concert Alert Signup */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card bg-warning text-dark border-0 shadow-lg">
                <div className="card-body text-center p-5">
                  <h3 className="card-title mb-3">
                    <i className="bi bi-bell-fill me-2"></i>Never Miss a Concert!
                  </h3>
                  <p className="card-text mb-4">
                    Get notified when your favorite artists announce new concerts in your area. Be the first to know about exclusive pre-sales and special offers.
                  </p>
                  <div className="row g-3 justify-content-center">
                    <div className="col-md-4">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="col-md-3">
                      <select className="form-select">
                        <option>All Cities</option>
                        {cities.slice(1).map(city => (
                          <option key={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-dark w-100">
                        <i className="bi bi-envelope me-2"></i>Subscribe
                      </button>
                    </div>
                  </div>
                  <p className="small mt-3 mb-0">
                    <i className="bi bi-shield-check me-1"></i>
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">{concertsData.length}+</h3>
                <p className="mb-0">Upcoming Concerts</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">15+</h3>
                <p className="mb-0">Legendary Artists</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">7</h3>
                <p className="mb-0">Countries</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">24/7</h3>
                <p className="mb-0">Ticket Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
