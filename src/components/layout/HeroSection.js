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
 * @param {Array} breadcrumbs - Optional array of breadcrumb objects: {to, text}
 * @param {React.ReactNode} image - Optional image element
 * @param {React.ReactNode} children - Optional custom content (rendered after description)
 * @param {boolean} variant - "centered" (default) or "split" (for detail pages with image)
 * @param {string} titleClassName - Classes for the main title block (default: display-4)
 */
export default function HeroSection({
  title,
  titleHighlight,
  description,
  buttons = [],
  backgroundStyle = '#191919',
  className = "py-4",
  breadcrumbs = null,
  image = null,
  children = null,
  variant = "centered",
  titleClassName = "sa-section-measure display-4 fw-bold mb-2",
}) {
  const isSoundartVariant = (variantClass) =>
    typeof variantClass === "string" && variantClass.includes("btn-soundart");

  return (
    <section
      className={className}
      style={{ background: backgroundStyle }}
    >
      <div className="container text-white">
        {breadcrumbs && (
          <nav aria-label="breadcrumb" className="mb-4 sa-breadcrumb-nav">
            <ol className="breadcrumb mb-0 sa-breadcrumb" style={{ backgroundColor: 'transparent' }}>
              {breadcrumbs.map((crumb, index) => {
                if (index === breadcrumbs.length - 1) {
                  const label = crumb.text;
                  const fullTitle = crumb.fullTitle ?? label;
                  return (
                    <li
                      key={index}
                      className="breadcrumb-item active text-warning fw-semibold sa-breadcrumb-active"
                      aria-current="page"
                      title={fullTitle !== label ? fullTitle : undefined}
                      aria-label={fullTitle}
                    >
                      <span className="sa-breadcrumb-active-text">{label}</span>
                    </li>
                  );
                }
                return (
                  <li key={index} className="breadcrumb-item">
                    <Link to={crumb.to} className="text-white-50 text-decoration-none" style={{ transition: 'color 0.3s ease' }}>
                      {crumb.text}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {variant === "centered" && (
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className={titleClassName}
                style={{ fontFamily: "Aptos, sans-serif" }}
              >
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
              </div>
              {description && (
                <p className="sa-section-measure lead mb-4">{description}</p>
              )}
              {buttons && buttons.length > 0 && (
                <div className="d-flex gap-3 flex-wrap justify-content-center hero-cta-row">
                  {buttons.map((button, index) => {
                    const soundartCta = isSoundartVariant(button.variant);
                    if (button.to) {
                      return (
                        <Link
                          key={index}
                          to={button.to}
                          className={`btn ${button.variant || 'btn-warning'} btn-lg${soundartCta ? " d-inline-flex align-items-center" : ""}`}
                          onClick={button.onClick}
                        >
                          {button.icon && (
                            <i className={`${button.icon}${soundartCta ? " cta-icon" : " me-2"}`} aria-hidden="true"></i>
                          )}
                          {button.text}
                        </Link>
                      );
                    }
                    return (
                      <button
                        key={index}
                        className={`btn ${button.variant || 'btn-warning'} btn-lg${soundartCta ? " d-inline-flex align-items-center" : ""}`}
                        onClick={button.onClick}
                      >
                        {button.icon && (
                          <i className={`${button.icon}${soundartCta ? " cta-icon" : " me-2"}`} aria-hidden="true"></i>
                        )}
                        {button.text}
                      </button>
                    );
                  })}
                </div>
              )}
              {children && children}
            </div>
          </div>
        )}

        {variant === "split" && (
          <div className="row align-items-center">
            <div className="col-lg-8 hero-section-split-text">
              <div
                className={titleClassName}
                style={{ fontFamily: "Aptos, sans-serif" }}
              >
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
              </div>
              {description && (
                <p className="sa-section-measure lead mb-4">{description}</p>
              )}
              {children && children}
              {buttons && buttons.length > 0 && (
                <div className="d-flex gap-3 flex-wrap hero-cta-row">
                  {buttons.map((button, index) => {
                    const soundartCta = isSoundartVariant(button.variant);
                    if (button.to) {
                      return (
                        <Link
                          key={index}
                          to={button.to}
                          className={`btn ${button.variant || 'btn-warning'} btn-lg${soundartCta ? " d-inline-flex align-items-center" : ""}`}
                          onClick={button.onClick}
                        >
                          {button.icon && (
                            <i className={`${button.icon}${soundartCta ? " cta-icon" : " me-2"}`} aria-hidden="true"></i>
                          )}
                          {button.text}
                        </Link>
                      );
                    }
                    return (
                      <button
                        key={index}
                        className={`btn ${button.variant || 'btn-warning'} btn-lg${soundartCta ? " d-inline-flex align-items-center" : ""}`}
                        onClick={button.onClick}
                      >
                        {button.icon && (
                          <i className={`${button.icon}${soundartCta ? " cta-icon" : " me-2"}`} aria-hidden="true"></i>
                        )}
                        {button.text}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            {image && (
              <div className="col-lg-4 text-center">
                {image}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

