import React from "react";
import { Link } from "react-router-dom";
import { HeroSection, CTASection, StatsSection } from "../components/layout";
import ArtistCard from "../components/ArtistGallery/ArtistCard";
import { heroData } from "../data/heroData";
import articlesData from "../data/Articles/articlesData";
import artistData from "../data/Artist/artistData";
import "../styles/home.css";

export default function Home() {
  const featuredArticle = articlesData[0];
  const featuredArtists = artistData.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={heroData.home.title}
        titleHighlight={heroData.home.titleHighlight}
        description={heroData.home.description}
        buttons={heroData.home.buttons}
      />

      {/* Legendary Artists Section */}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Legendary Artists</h2>
              <p className="lead text-muted mb-0">Explore the icons who defined music history</p>
            </div>
          </div>
          
          <div className="row g-4 mb-5">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
          
          <div>
            <Link to="/artists" className="cta-bar d-block text-decoration-none w-100 text-uppercase">
              <i className="bi bi-music-note me-2"></i>Discover All Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection
        stats={[
          { number: "50+", label: "Legendary Artists" },
          { number: "100+", label: "Exclusive Stories" },
          { number: "1000+", label: "Rare Photos" },
          { number: "24/7", label: "Music Discovery" }
        ]}
      />

      {/* Latest Stories Section */}
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

      {/* Explore CTA Section */}
      <CTASection
        title="Ready to Explore Music History?"
        description="Join thousands of music lovers discovering rare stories, exclusive content, and the legends that shaped our world."
        buttons={[
          {
            to: "/artists",
            text: "Start Exploring",
            icon: "bi bi-music-note",
            variant: "btn-warning"
          }
        ]}
      />
    </div>
  );
}
