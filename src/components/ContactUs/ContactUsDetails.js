import React from "react";

export default function ContactUsDetails() {
  return (
    <div className="row g-4 mb-4">
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-envelope me-2 text-warning"></i>
              Email
            </h5>
            <p className="card-text text-muted">support@soundart.example</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-chat-dots me-2 text-warning"></i>
              Live Chat
            </h5>
            <p className="card-text text-muted">Mon–Fri, 9am–6pm (UTC)</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-geo-alt me-2 text-warning"></i>
              Address
            </h5>
            <p className="card-text text-muted">123 Music Ave, London</p>
          </div>
        </div>
      </div>
    </div>
  );
}


