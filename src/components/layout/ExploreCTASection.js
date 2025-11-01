import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "./";
import { sectionTitles } from "../../data/sectionTitlesData";

/**
 * ExploreCTASection - Call-to-Action section for exploring music history
 * Uses SectionTitle component for consistent styling
 */
export default function ExploreCTASection({
  title = sectionTitles.exploreCTA.title,
  subtitle = sectionTitles.exploreCTA.subtitle,
  buttons = sectionTitles.exploreCTA.buttons
}) {
  return (
    <section className="py-5" style={{ background: "#191919" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <SectionTitle
              title={title}
              subtitle={subtitle}
              variant="newsletter"
              textColor="white"
            />
            {buttons && buttons.length > 0 && (
              <div className="mt-5">
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    to={button.to || "#"}
                    className="cta-bar d-block text-decoration-none w-100 text-uppercase"
                    onClick={button.onClick}
                  >
                    {button.icon && <i className={`${button.icon} me-2`}></i>}
                    {button.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

