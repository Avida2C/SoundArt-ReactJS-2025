import React from "react";
import artistData from "../../data/Artist/artistData";
import Card from "../Card";
import { isArtistProfilePublic } from "../../utils/artistAccess";

export default function ArtistGallery({ artists = artistData }) {
  return (
    <div>
      <div className="row g-4">
        {artists.map((artist) => {
          const isFeatured = Boolean(artist.featured);
          const isPublic = isArtistProfilePublic(artist);
          const wrapClass = [
            "col-lg-3 col-md-4 col-sm-6",
            isFeatured ? "artist-gallery-item--featured" : "",
            !isPublic ? "artist-gallery-item--locked" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div key={artist.id} className={wrapClass}>
              <Card
                image={artist.image}
                title={artist.name}
                description={artist.bio.substring(0, 100) + "..."}
                buttonText={isPublic ? "View Artist" : "Unavailable"}
                buttonLink={isPublic ? `/artist/${artist.id}` : undefined}
                buttonDisabled={!isPublic}
                cardType="artist"
                topLeftBadge={
                  isFeatured
                    ? [{ text: "Featured", className: "bg-warning text-dark" }]
                    : undefined
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

