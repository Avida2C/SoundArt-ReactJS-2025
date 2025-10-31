import React from "react";
import { Link } from "react-router-dom";
import { HeroSection, CTASection, StatsSection, FeaturedStory, StoriesSidebar } from "../components/layout";
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
            <FeaturedStory article={featuredArticle} />
            <StoriesSidebar stories={articlesData.slice(1, 4)} />
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
