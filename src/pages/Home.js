import React from "react";
import { Link } from "react-router-dom";
import { HeroSection, CTASection, StatsSection, FeaturedStory, StoriesSidebar, SectionTitle, ExploreCTASection } from "../components/layout";
import { LegendaryArtistsSection } from "../components/ArtistGallery";
import { heroData } from "../data/heroData";
import { sectionTitles } from "../data/sectionTitlesData";
import articlesData from "../data/Articles/articlesData";
import artistData from "../data/Artist/artistData";
import { getLegendarySectionDisplayArtists } from "../utils/artistAccess";
import { usePageTitle } from "../hooks";
import "../styles/home.css";

export default function Home() {
  const featuredArticle = articlesData[0];
  const featuredArtists = getLegendarySectionDisplayArtists(artistData);

  usePageTitle("Home");

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
      <LegendaryArtistsSection artists={featuredArtists} />

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
      <section className="pt-3 pb-5 bg-light">
        <div className="container">
          <SectionTitle
            title={sectionTitles.news.title}
            subtitle="Discover the most fascinating stories from the world of music"
          />
          
          <div className="row g-4">
            <FeaturedStory article={featuredArticle} />
            <StoriesSidebar stories={articlesData.slice(1, 4)} />
          </div>
        </div>
      </section>

      {/* Explore CTA Section */}
      <ExploreCTASection />
    </div>
  );
}
