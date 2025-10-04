import React from "react";
import { Link } from "react-router-dom";
import ArtistCTA from "../components/ArtistGallery/ArtistCTA";
import articlesData from "../data/Articles/articlesData";
import artistData from "../data/Artist/artistData";
import "../styles/home.css";

export default function Home() {
  const featuredArticle = articlesData[0];
  const featuredArtists = artistData.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="hero-bg position-absolute w-100 h-100"></div>
        <div className="hero-overlay position-absolute w-100 h-100"></div>
        
        <div className="container py-5">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className="hero-content text-white">
                <h1 className="display-3 fw-bold mb-4">
                  Welcome to <span className="brand-text">Sound<span className="brand-accent">Art</span></span>
                </h1>
                <p className="lead mb-4">
                  Discover the legends of music, explore rare stories, and dive deep into the world of iconic artists and bands that shaped generations.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link to="/artists" className="btn btn-warning btn-lg px-4 py-3">
                    <i className="bi bi-music-note me-2"></i>Explore Artists
                  </Link>
                  <Link to="/news" className="btn btn-outline-light btn-lg px-4 py-3">
                    <i className="bi bi-newspaper me-2"></i>Latest News
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image text-center">
                <div className="position-relative">
                  <div className="hero-glow position-absolute"></div>
                  <img 
                    src="/images/thebeatles1967.jpg" 
                    alt="Music Legends" 
                    className="img-fluid rounded-4 shadow-lg hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Latest Stories</h2>
              <p className="lead text-muted">Discover the most fascinating stories from the world of music</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="featured-news-card card border-0 shadow-lg overflow-hidden">
                <div className="row g-0 h-100">
                  <div className="col-md-6">
                    <img 
                      src={featuredArticle.image1} 
                      className="img-fluid h-100 article-image" 
                      alt={featuredArticle.title}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body h-100 d-flex flex-column justify-content-center p-4">
                      <span className="badge bg-warning text-dark mb-3 px-3 py-2">Featured Story</span>
                      <h3 className="card-title fw-bold mb-3">{featuredArticle.title}</h3>
                      <p className="card-text text-muted mb-4">
                        {featuredArticle.content[0].substring(0, 200)}...
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          <i className="bi bi-person me-1"></i>{featuredArticle.author} • 
                          <i className="bi bi-calendar ms-2 me-1"></i>{featuredArticle.date}
                        </small>
                        <Link to={`/article/${featuredArticle.id}`} className="btn btn-warning">
                          Read Full Story
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="news-sidebar">
                <h4 className="fw-bold mb-4">More Stories</h4>
                {articlesData.slice(1, 4).map((article) => (
                  <div key={article.id} className="news-item mb-4">
                    <Link to={`/article/${article.id}`} className="text-decoration-none text-dark">
                      <div className="d-flex gap-3">
                        <img 
                          src={article.image1} 
                          alt={article.title}
                          className="rounded news-thumbnail"
                        />
                        <div>
                          <h6 className="mb-1 fw-semibold">{article.title}</h6>
                          <small className="text-muted">{article.date}</small>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                <div className="text-center mt-4">
                  <Link to="/news" className="btn btn-outline-warning">
                    View All Stories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Legendary Artists</h2>
              <p className="lead text-muted">Explore the icons who defined music history</p>
            </div>
          </div>
          
          <div className="row g-4">
            {featuredArtists.map((artist) => (
              <div key={artist.id} className="col-lg-3 col-md-6">
                <div className="artist-card card border-0 shadow-lg overflow-hidden h-100">
                  <div className="position-relative">
                    <img 
                      src={artist.image} 
                      className="card-img-top artist-card-image" 
                      alt={artist.name}
                    />
                    <div className="artist-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
                      <div className="p-3 text-white w-100 artist-overlay-gradient">
                        <h5 className="card-title fw-bold mb-2">{artist.name}</h5>
                        <p className="card-text small mb-3">
                          {artist.bio.substring(0, 100)}...
                        </p>
                        <Link to={`/artist/${artist.id}`} className="btn btn-warning btn-sm">
                          Explore Artist
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/artists" className="btn btn-warning btn-lg px-5 py-3">
              <i className="bi bi-music-note-list me-2"></i>Discover All Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">50+</h3>
                <p className="mb-0">Legendary Artists</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">100+</h3>
                <p className="mb-0">Exclusive Stories</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-2">1000+</h3>
                <p className="mb-0">Rare Photos</p>
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

      {/* Artist CTA Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Discover Music Legends</h2>
              <p className="lead text-muted">Explore our featured artist and discover new music icons</p>
            </div>
          </div>
          <ArtistCTA />
        </div>
      </section>

      {/* Get Featured as Artist Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-lg cta-dark-bg">
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
                            <i className="bi bi-music-note-beamed text-warning mb-2 d-block icon-large"></i>
                            <h6>Upload Music</h6>
                            <small className="text-muted">Share your tracks</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center">
                            <i className="bi bi-people text-warning mb-2 d-block icon-large"></i>
                            <h6>Build Fanbase</h6>
                            <small className="text-muted">Connect with listeners</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center">
                            <i className="bi bi-graph-up text-warning mb-2 d-block icon-large"></i>
                            <h6>Grow Your Career</h6>
                            <small className="text-muted">Reach new heights</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center">
                      <div className="p-4">
                        <i className="bi bi-mic text-warning mb-3 d-block icon-xl"></i>
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

      {/* CTA Section */}
      <section className="py-5 cta-dark-bg">
        <div className="container text-center text-white">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">Ready to Explore Music History?</h2>
              <p className="lead mb-4">
                Join thousands of music lovers discovering rare stories, exclusive content, and the legends that shaped our world.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/artists" className="btn btn-warning btn-lg px-5 py-3">
                  <i className="bi bi-music-note me-2"></i>Start Exploring
                </Link>
                <Link to="/news" className="btn btn-outline-light btn-lg px-5 py-3">
                  <i className="bi bi-newspaper me-2"></i>Read Latest News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}