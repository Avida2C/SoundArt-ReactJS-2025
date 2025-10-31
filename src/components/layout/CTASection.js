import React from "react";
import { Link } from "react-router-dom";

/**
 * CTASection - Reusable Call-to-Action section component
 * @param {string} title - Main heading text
 * @param {string} description - Description/subtitle text
 * @param {Array} buttons - Array of button objects: {to, text, icon, variant, onClick}
 * @param {string} backgroundStyle - Background color (default: "#191919")
 * @param {string} className - Additional CSS classes
 */
export default function CTASection({
  title,
  description,
  buttons = [],
  backgroundStyle = "#191919",
  className = "py-5"
}) {
  return (
    <section className={className} style={{ background: backgroundStyle }}>
      <div className="container text-center text-white">
        <div className="row">
          <div className="col-12 text-center">
            {title && (
              <h2 className="display-5 fw-bold mb-4">{title}</h2>
            )}
            {description && (
              <p className="lead mb-4">{description}</p>
            )}
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

