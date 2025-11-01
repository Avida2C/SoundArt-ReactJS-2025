import React from "react";

/**
 * OverviewTab - Displays artist overview, bio, members, and quick stats
 * @param {Object} artist - Artist object
 * @param {Object} artistDetails - Artist details object with fullBio, members, discography, etc.
 */
export default function OverviewTab({ artist, artistDetails }) {
  return (
    <div className="row">
      <div className="col-lg-8">
        <h3 className="mb-3">About {artist.name}</h3>
        <p className="lead mb-4">{artistDetails.fullBio}</p>

        <h4 className="mb-3">Band Members</h4>
        <div className="row g-3">
          {artistDetails.members.map((member, index) => (
            <div key={index} className="col-md-6">
              <div className="p-3 border rounded">
                <h6 className="mb-0">{member}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Quick Stats</h5>
            <div className="row g-3">
              <div className="col-6">
                <div className="text-center p-2 bg-light rounded">
                  <h4 className="text-warning mb-1">
                    {artistDetails.discography.length}
                  </h4>
                  <small className="text-muted">Albums</small>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center p-2 bg-light rounded">
                  <h4 className="text-warning mb-1">50M+</h4>
                  <small className="text-muted">Streams</small>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center p-2 bg-light rounded">
                  <h4 className="text-warning mb-1">
                    {new Date().getFullYear() - parseInt(artistDetails.formed)}
                  </h4>
                  <small className="text-muted">Years Active</small>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center p-2 bg-light rounded">
                  <h4 className="text-warning mb-1">
                    {artistDetails.members.length}
                  </h4>
                  <small className="text-muted">Members</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
