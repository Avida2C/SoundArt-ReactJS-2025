import React from "react";

/**
 * OverviewTab - Displays artist overview, bio, members, and quick stats
 * @param {Object} artist - Artist object
 * @param {Object} artistDetails - Artist details object with fullBio, members, discography, etc.
 */
export default function OverviewTab({ artist, artistDetails }) {
  // Split bio into two paragraphs if possible
  const splitBioIntoParagraphs = (bio) => {
    if (!bio) return [];
    
    // Split by sentences (period, exclamation, question mark followed by space and capital)
    const sentences = bio.match(/[^.!?]+[.!?]+/g) || [];
    
    if (sentences.length === 0) return [bio];
    
    // Split roughly in half
    const midPoint = Math.ceil(sentences.length / 2);
    const firstParagraph = sentences.slice(0, midPoint).join(' ').trim();
    const secondParagraph = sentences.slice(midPoint).join(' ').trim();
    
    return [firstParagraph, secondParagraph].filter(p => p.length > 0);
  };

  const bioParagraphs = artistDetails.fullBio
    ? splitBioIntoParagraphs(artistDetails.fullBio)
    : [];

  return (
    <div>
      <div className="row mb-5">
        {/* About Section - Left Column */}
        <div className="col-lg-8">
          <h2 className="mb-4 fw-bold" style={{ color: "#353535", fontFamily: "sans-serif" }}>
            About {artist.name}
          </h2>
          <div className="artist-overview-text" style={{ color: "#353535", fontFamily: "sans-serif" }}>
            {bioParagraphs.length > 0 ? (
              <>
                <p className="mb-3">{bioParagraphs[0]}</p>
                {bioParagraphs[1] && <p className="mb-0">{bioParagraphs[1]}</p>}
              </>
            ) : (
              <p className="mb-3">{artistDetails.fullBio}</p>
            )}
          </div>
        </div>

        {/* Quick Stats Section - Right Column */}
        <div className="col-lg-4">
          <h2 className="mb-4 fw-bold" style={{ color: "#353535", fontFamily: "sans-serif" }}>
            Quick Stats
          </h2>
          <div className="row g-3">
            <div className="col-6">
              <div
                className="text-center p-3"
                style={{
                  border: "1px solid #ffc107",
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                <h1
                  className="mb-2 fw-bold"
                  style={{ color: "#ffc107" }}
                >
                  {artistDetails.discography?.length || 0}
                </h1>
                <small style={{ color: "#353535", fontFamily: "sans-serif" }}>
                  Albums
                </small>
              </div>
            </div>
            <div className="col-6">
              <div
                className="text-center p-3"
                style={{
                  border: "1px solid #ffc107",
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                <h1
                  className="mb-2 fw-bold"
                  style={{ color: "#ffc107" }}
                >
                  50M+
                </h1>
                <small style={{ color: "#353535", fontFamily: "sans-serif" }}>
                  Streams
                </small>
              </div>
            </div>
            <div className="col-6">
              <div
                className="text-center p-3"
                style={{
                  border: "1px solid #ffc107",
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                <h1
                  className="mb-2 fw-bold"
                  style={{ color: "#ffc107" }}
                >
                  {artistDetails.formed
                    ? new Date().getFullYear() - parseInt(artistDetails.formed)
                    : 0}
                </h1>
                <small style={{ color: "#353535", fontFamily: "sans-serif" }}>
                  Years Active
                </small>
              </div>
            </div>
            <div className="col-6">
              <div
                className="text-center p-3"
                style={{
                  border: "1px solid #ffc107",
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                <h1
                  className="mb-2 fw-bold"
                  style={{ color: "#ffc107" }}
                >
                  {artistDetails.members?.length || 0}
                </h1>
                <small style={{ color: "#353535", fontFamily: "sans-serif" }}>
                  Members
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Band Members Section - Same Width as About */}
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-4 fw-bold" style={{ color: "#353535", fontFamily: "sans-serif" }}>
            Band Members
          </h2>
          <div className="row g-3">
            {artistDetails.members?.map((member, index) => (
              <div key={index} className="col-md-6">
                <div
                  className="p-3"
                  style={{
                    border: "1px solid #ffc107",
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                >
                  <h6
                    className="mb-0"
                    style={{ color: "#353535", fontFamily: "sans-serif" }}
                  >
                    {member}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
