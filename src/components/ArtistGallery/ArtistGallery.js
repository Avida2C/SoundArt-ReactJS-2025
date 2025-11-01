import React from "react";
import artistData from "../../data/Artist/artistData";
import Card from "../Card";

export default function ArtistGallery({ artists = artistData }) {

  return (
    <div>
      <div className="row g-4">
        {artists.map((artist) => (
          <div key={artist.id} className="col-lg-3 col-md-4 col-sm-6">
            <Card
              image={artist.image}
              title={artist.name}
              description={artist.bio.substring(0, 100) + "..."}
              buttonText="View Artist"
              buttonLink={`/artist/${artist.id}`}
              cardType="artist"
            />
          </div>
        ))}
      </div>
    </div>
  );
}


