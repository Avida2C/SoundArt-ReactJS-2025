import React from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "../components/layout";
import { heroData } from "../data/heroData";
import { privacySections } from "../data/privacyPolicyData";

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={heroData.privacy.title}
        titleHighlight={heroData.privacy.titleHighlight}
        description={heroData.privacy.description}
      />

      {/* Content Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="px-4">
                
                {privacySections.map((section) => (
                  <div key={section.id} className="mb-5">
                    <h2 className="h3 fw-bold mb-3">{section.id}. {section.title}</h2>
                    
                    {/* Render content paragraphs */}
                    {section.content && section.content.map((paragraph, index) => (
                      <p key={index} className={index === 0 && (section.list || section.subsections) ? "text-muted mb-3" : ""}>
                        {paragraph}
                      </p>
                    ))}

                    {/* Render subsections */}
                    {section.subsections && section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h4 className="h5 fw-semibold mb-3">{subsection.title}</h4>
                        {subsection.content && subsection.content.map((paragraph, paraIndex) => (
                          <p key={paraIndex} className={paraIndex === 0 && (subsection.list || subsection.additionalList) ? "text-muted mb-3" : ""}>
                            {paragraph}
                          </p>
                        ))}
                        {subsection.list && (
                          <ul className="mb-4">
                            {subsection.list.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {subsection.additionalContent && subsection.additionalContent.map((paragraph, paraIndex) => (
                          <p key={`additional-${paraIndex}`} className={paraIndex === 0 && subsection.additionalList ? "text-muted mb-3" : ""}>
                            {paragraph}
                          </p>
                        ))}
                        {subsection.additionalList && (
                          <ul className="mb-4">
                            {subsection.additionalList.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* Render list */}
                    {section.list && (
                      <ul className="mb-4">
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
                      <div>
                        <p className="mb-2"><strong>Email:</strong> {section.contactInfo.email}</p>
                        <p className="mb-2"><strong>Phone:</strong> {section.contactInfo.phone}</p>
                        <p className="mb-0"><strong>Address:</strong> {section.contactInfo.address}</p>
                      </div>
                    )}
                  </div>
                ))}

                <div className="d-flex justify-content-end mt-5">
                  <Link to="/" className="btn btn-warning text-uppercase">
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
