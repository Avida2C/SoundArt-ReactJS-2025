import React from "react";
import { Link } from "react-router-dom";
import ConcertCard from "./ConcertCard";
import SectionTitle from "./layout/SectionTitle";

/**
 * UpcomingConcerts - Component for displaying upcoming concerts section
 */
export default function UpcomingConcerts({ concerts }) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <SectionTitle 
          title="Upcoming Concerts" 
          subtitle="Don't miss these legendary performances" 
        />
        
        <div className="row g-4">
          {concerts.map((concert, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <ConcertCard 
                concert={concert} 
                isAuthenticated={false}
              />
            </div>
          ))}
        </div>
        <div>
          <Link to="/concerts" className="cta-bar d-block text-decoration-none w-100 text-uppercase mt-4">
            <i className="bi bi-music-note me-2"></i>View All Concerts
          </Link>
        </div>
      </div>
    </section>
  );
}

