import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArtistBio({ bio, artistId }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    console.log("Navigating to artist:", artistId); // ✅ Debugging log
    if (artistId) {
      navigate(`/artist/${artistId}`);
    }
  };

  return (
    <div className="artist-bio col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5 position-absolute bottom-0 end-0">
      <p className="truncate-bio">{bio}</p>
      <button type="button" onClick={handleReadMore} className="btn btn-primary">
        Read More
      </button>
    </div>
  );
}
