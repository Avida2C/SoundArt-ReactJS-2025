import React from "react";

export default function ContactUsDetails() {
  return (
    <div className="row g-4 mb-5">
      <div className="col-md-4">
        <div className="contact-method-card h-100">
          <div className="contact-icon-wrapper d-flex">
             <i className="contact-icon bi bi-envelope text-accent me-2"></i> 
             <div className="ms-2"><h5 className="contact-method-title p-0 m-0">
            Email <span className="text-warning">Us</span>
          </h5>
          <p className="contact-method-description">Send us an email and we'll respond within 24 hours</p>
          
              </div></div>
         
          <div className="contact-info-box">
            <span className="contact-info-text">info@soundart.com</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-method-card h-100">
          <div className="contact-icon-wrapper d-flex">
            <i className="bi bi-telephone text-accent me-2"></i> 
            <div className="ms-2">
            <h5 className="contact-method-title p-0 m-0">
            Call <span className="text-warning">Us</span>
          </h5>
          <p className="contact-method-description">Monday to Friday, 9:00 AM to 6:00 PM</p>
          </div>
          </div>
         
          
          <div className="contact-info-box">
            <span className="contact-info-text">(356) 1234 1234</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-method-card h-100 ">
          <div className="contact-icon-wrapper d-flex">
            <i className="bi bi-geo-alt text-accent me-2"></i>
            <div className="ms-2">
             <h5 className="contact-method-title p-0 m-0">
            Visit <span className="text-warning">Us</span>
          </h5>
          <p className="contact-method-description">Our office is located in the heart of the city</p>
          </div>
          </div>
          
         
          <div className="contact-info-box">
            <span className="contact-info-text"><span className="fw-bold">SoundArt Ltd.</span> 112, Roy Buildings, JC Roads, RY</span>
          </div>
        </div>
      </div>
    </div>
  );
}


