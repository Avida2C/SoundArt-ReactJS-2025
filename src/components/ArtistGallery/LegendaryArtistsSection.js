import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../layout";
import ArtistCard from "./ArtistCard";

/**
 * LegendaryArtistsSection - Component for displaying legendary artists with CTA
 * @param {Array} artists - Array of artist objects to display
 * @param {string} title - Section title (default: "Legendary Artists")
 * @param {string} subtitle - Section subtitle (default: "Explore the icons who defined music history")
 */
export default function LegendaryArtistsSection({
  artists = [],
  title = "Legendary Artists",
  subtitle = "Explore the icons who defined music history"
}) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <SectionTitle
              title={title}
              subtitle={subtitle}
              variant="newsletter"
            />
          </div>
        </div>
        
        <div className="row g-4 mb-4">
          {artists.map((artist) => (
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
  );
}

