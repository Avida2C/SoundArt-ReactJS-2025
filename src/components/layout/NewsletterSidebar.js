import React, { useState } from "react";
import { SectionTitle } from "./";
import { sectionTitles } from "../../data/sectionTitlesData";

export default function NewsletterSidebar({
  title = sectionTitles.newsletter.title,
  subtitle = sectionTitles.newsletter.subtitle,
  placeholder = "Enter your email address",
  privacyText = "We respect your privacy. Unsubscribe at any time."
}) {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      console.log("Newsletter subscription:", email);
      setStatusMessage("You're subscribed! We'll keep you updated.");
      setEmail("");
    }
  };

  return (
    <div className="card bg-light">
      <div className="card-body text-center">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          variant="newsletter"
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="email" 
              className="form-control form-control-lg" 
              id="newsletter-sidebar-email"
              name="newsletterSidebarEmail"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning btn-lg w-100">
            <i className="bi bi-envelope me-2"></i>Subscribe
          </button>
        </form>
        {statusMessage && (
          <div className="alert alert-success mt-3 mb-0 py-2" role="status">
            {statusMessage}
          </div>
        )}
        <small className="text-muted mt-3 d-block">
          {privacyText}
        </small>
      </div>
    </div>
  );
}

