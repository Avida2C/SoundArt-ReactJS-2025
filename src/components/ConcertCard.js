import React from "react";
import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { formatDateShort } from "../utils/helpers";
import { resolveConcertTicketId } from "../utils/resolveConcertTicketId";

/**
 * ConcertCard - Simple concert card matching the Artists page upcoming concerts style
 */
export default function ConcertCard({ concert, hideImage = false }) {
  const ticketId = resolveConcertTicketId(concert);
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Sold Out':
        return 'bg-danger';
      case 'Limited':
        return 'bg-warning text-dark';
      case 'Available':
        return 'bg-success';
      default:
        return 'bg-warning text-dark';
    }
  };

  return (
    <div className="card h-100 border-0" style={{ boxShadow: '0 0.125rem 0.5rem rgba(0, 0, 0, 0.1)', borderRadius: '4px' }}>
      {!hideImage && (
        <div className="position-relative">
          <img 
            src={concert.image} 
            className="card-img-top" 
            alt={concert.artist}
            style={{height: '200px', objectFit: 'cover'}}
          />
          <div className="position-absolute top-0 end-0 m-2">
            <span className={`badge ${getStatusBadge(concert.status)}`}>
              {concert.status || 'Live'}
            </span>
          </div>
        </div>
      )}
      {hideImage && (
        <div className="card-body pb-0">
          <div className="d-flex justify-content-end mb-2">
            <span className={`badge ${getStatusBadge(concert.status)}`}>
              {concert.status || 'Live'}
            </span>
          </div>
        </div>
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{concert.artist}</h5>
        <p className="text-muted mb-2">
          <i className="bi bi-geo-alt me-1"></i>{concert.venue}
        </p>
        <p className="text-muted mb-2">
          <i className="bi bi-calendar me-1"></i>
          {formatDateShort(concert.date)}
        </p>
        <p className="text-muted mb-3">
          <i className="bi bi-currency-dollar me-1"></i>{concert.price}
        </p>
        <div className="mt-auto">
          {concert.status === "Sold Out" ? (
            <button className="btn btn-outline-secondary w-100" disabled>
              <i className="bi bi-x-circle me-2"></i>Sold Out
            </button>
          ) : (
            <Link
              to={`/concerts/${ticketId}/tickets`}
              className="btn btn-warning w-100"
            >
              <IoTicketOutline className="me-1 fs-4" />{" "}
              <span className="me-2">Get Tickets</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

