import React from "react";
import { formatDateShort } from "../../utils/helpers";

/**
 * ConcertsTab - Displays upcoming concerts and subscription form
 * @param {Object} artist - Artist object
 * @param {Object} artistDetails - Artist details object with concerts array
 * @param {boolean} isAuthenticated - Whether user is authenticated
 */
export default function ConcertsTab({ artist, artistDetails, isAuthenticated }) {
  return (
    <div>
      <h3 className="mb-4">Upcoming Concerts</h3>
      <div className="row g-4">
        {artistDetails.concerts.map((concert, index) => (
          <div key={index} className="col-lg-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="card-title mb-1">{concert.venue}</h5>
                    <p className="text-muted mb-0">
                      <i className="bi bi-geo-alt me-1"></i>
                      {concert.city}
                    </p>
                  </div>
                  <span
                    className={`badge ${
                      concert.status === "Sold Out"
                        ? "bg-danger"
                        : concert.status === "Limited"
                        ? "bg-warning text-dark"
                        : "bg-success"
                    }`}
                  >
                    {concert.status}
                  </span>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <i
                        className="bi bi-calendar-event text-warning mb-2 d-block"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <h6 className="mb-1">{formatDateShort(concert.date)}</h6>
                      <small className="text-muted">Date</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <i
                        className="bi bi-currency-dollar text-warning mb-2 d-block"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <h6 className="mb-1">{concert.price}</h6>
                      <small className="text-muted">Price Range</small>
                    </div>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  {concert.status === "Sold Out" ? (
                    <button className="btn btn-outline-secondary" disabled>
                      <i className="bi bi-x-circle me-2"></i>Sold Out
                    </button>
                  ) : (
                    <button className="btn btn-warning">
                      <i className="bi bi-ticket-perforated me-2"></i>
                      Get Tickets
                    </button>
                  )}
                  {isAuthenticated && (
                    <button className="btn btn-outline-warning btn-sm">
                      <i className="bi bi-heart me-2"></i>Add to Wishlist
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Concert Alert Signup */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-warning text-dark">
            <div className="card-body text-center p-4">
              <h4 className="card-title mb-3">
                <i className="bi bi-bell me-2"></i>Never Miss a Show!
              </h4>
              <p className="card-text mb-4">
                Get notified when {artist.name} announces new concerts in your
                area.
              </p>
              <div className="row g-3 justify-content-center">
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="col-md-3">
                  <button className="btn btn-dark w-100">
                    <i className="bi bi-envelope me-2"></i>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
