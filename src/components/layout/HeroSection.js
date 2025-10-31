import React from "react";
import { Link } from "react-router-dom";

/**
 * HeroSection - Reusable hero section component
 * @param {string} title - Main title
 * @param {string} titleHighlight - Optional text to highlight in title (wrapped in span with text-warning)
 * @param {string} description - Subtitle/description text
 * @param {Array} buttons - Optional array of button objects: {to, text, icon, variant, onClick}
 * @param {string} backgroundStyle - Custom background style (default: #191919)
 * @param {string} className - Additional CSS classes
 */
export default function HeroSection({
  title,
  titleHighlight,
  description,
  buttons = [],
  backgroundStyle = '#191919',
  className = "py-5"
}) {
  return (
    <section
      className={className}
      style={{ background: backgroundStyle }}
    >
      <div className="container text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold mb-4">
              {titleHighlight ? (
                titleHighlight === "SoundArt" ? (
                  <>
                    {title} <span className="brand-text text-white">Sound<span className="brand-accent">Art</span></span>
                  </>
                ) : (
                  <>
                    {title} <span className="text-warning">{titleHighlight}</span>
                  </>
                )
              ) : (
                title
              )}
            </h1>
            {description && (
              <p className="lead mb-4">{description}</p>
            )}
            {buttons && buttons.length > 0 && (
              <div className="d-flex gap-3 flex-wrap justify-content-center">
                {buttons.map((button, index) => {
                  if (button.to) {
                    return (
                      <Link
                        key={index}
                        to={button.to}
                        className={`btn ${button.variant || 'btn-warning'} btn-lg`}
                        onClick={button.onClick}
                      >
                        {button.icon && <i className={`${button.icon} me-2`}></i>}
                        {button.text}
                      </Link>
                    );
                  }
                  return (
                    <button
                      key={index}
                      className={`btn ${button.variant || 'btn-warning'} btn-lg`}
                      onClick={button.onClick}
                    >
                      {button.icon && <i className={`${button.icon} me-2`}></i>}
                      {button.text}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

