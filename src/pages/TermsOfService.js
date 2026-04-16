import React from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "../components/layout";
import { heroData } from "../data/heroData";
import { termsSections } from "../data/termsOfServiceData";
import { usePageTitle } from "../hooks";

export default function TermsOfService() {
  usePageTitle("Terms of Service");

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={heroData.terms.title}
        titleHighlight={heroData.terms.titleHighlight}
        description={heroData.terms.description}
      />

      {/* Content Section (match other content pages) */}
      <section className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div>
                <div className="accordion" id="termsOfServiceAccordion">
                  {termsSections.map((section) => {
                    const headingId = `terms-heading-${section.id}`;
                    const collapseId = `terms-collapse-${section.id}`;

                    return (
                      <div key={section.id} className="accordion-item mb-3 border-0">
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className={`accordion-button fw-semibold ${section.id === 1 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={section.id === 1 ? "true" : "false"}
                            aria-controls={collapseId}
                          >
                            {section.id}. {section.title}
                          </button>
                        </h2>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse ${section.id === 1 ? "show" : ""}`}
                          aria-labelledby={headingId}
                          data-bs-parent="#termsOfServiceAccordion"
                        >
                          <div className="accordion-body">
                            {/* Render content paragraphs */}
                            {section.content && section.content.map((paragraph, index) => (
                              <p key={index} className={index === 0 && section.list ? "text-muted mb-3" : ""}>
                                {paragraph}
                              </p>
                            ))}

                            {/* Render subsections */}
                            {section.subsections && section.subsections.map((subsection, subIndex) => (
                              <div key={subIndex} className="mt-3">
                                <h4 className="h6 fw-semibold mb-2">{subsection.title}</h4>
                                {subsection.content && subsection.content.map((paragraph, paraIndex) => (
                                  <p key={paraIndex} className={paraIndex === 0 && subsection.list ? "text-muted mb-3" : ""}>
                                    {paragraph}
                                  </p>
                                ))}
                                {subsection.list && (
                                  <ul className="mb-3">
                                    {subsection.list.map((item, itemIndex) => (
                                      <li key={itemIndex}>{item}</li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}

                            {/* Render list */}
                            {section.list && (
                              <ul className="mb-3">
                                {section.list.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            )}

                            {/* Render additional content */}
                            {section.additionalContent && section.additionalContent.map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}

                            {/* Render contact information */}
                            {section.contactInfo && (
                              <div className="mt-3">
                                <p className="mb-2"><strong>Email:</strong> {section.contactInfo.email}</p>
                                <p className="mb-2"><strong>Phone:</strong> {section.contactInfo.phone}</p>
                                <p className="mb-0"><strong>Address:</strong> {section.contactInfo.address}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="d-flex justify-content-end">
                  <Link
                    to="/"
                    className="btn btn-warning text-uppercase legal-return-btn"
                  >
                    <i className="bi bi-house-up me-2"></i>Return Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
