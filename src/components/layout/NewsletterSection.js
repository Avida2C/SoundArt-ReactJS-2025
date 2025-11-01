import React, { useState } from "react";
import { SectionTitle } from "./";
import { sectionTitles } from "../../data/sectionTitlesData";

export default function NewsletterSection({
  title = sectionTitles.newsletter.title,
  subtitle = sectionTitles.newsletter.subtitle,
  titleIcon,
  placeholder = "Enter your email address",
  privacyText = "We respect your privacy. Unsubscribe at any time."
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <SectionTitle
              title={title}
              subtitle={subtitle}
              titleIcon={titleIcon}
              variant="newsletter"
            />
            <form onSubmit={handleSubmit}>
              <div className="row g-3 justify-content-center">
                <div className="col-md-6">
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    placeholder={placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <button type="submit" className="btn btn-warning btn-lg w-100">
                    <i className="bi bi-envelope me-2"></i>Subscribe
                  </button>
                </div>
              </div>
            </form>
            <small className="text-muted mt-3 d-block">
              {privacyText}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

