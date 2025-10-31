import React from "react";

/**
 * StatsSection - Reusable statistics section component
 * @param {Array} stats - Array of stat objects: {number, label}
 * @param {string} backgroundStyle - Background color (default: "#191919")
 * @param {string} textClass - CSS class for text color (default: "text-white")
 * @param {string} className - Additional CSS classes
 */
export default function StatsSection({
  stats = [],
  backgroundStyle = "#191919",
  textClass = "text-white",
  className = "py-5"
}) {
  return (
    <section className={`${className} ${textClass}`} style={{ background: backgroundStyle }}>
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 my-4">
              <div className="stat-item">
                <h3 className="display-3 fw-bold text-warning mb-2">{stat.number}</h3>
                <p className="mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

