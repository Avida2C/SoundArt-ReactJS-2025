import React from "react";

export default function SectionTitle({ title, subtitle, variant = "section", titleIcon, textColor = "default" }) {
  const titleElement = titleIcon ? (
    <>
      <i className={`${titleIcon} text-warning me-2`}></i>
      {title}
    </>
  ) : (
    title
  );

  // Determine heading tag and classes based on variant
  let HeadingTag, headingClass, subtitleClass, titleMargin, subtitleMargin;
  
  if (variant === "section" || variant === "newsletter") {
    HeadingTag = "h2";
    headingClass = "display-5";
    subtitleClass = "lead";
    titleMargin = variant === "newsletter" ? "mb-3" : "mb-2";
    subtitleMargin = "mb-4";
  } else if (variant === "inline") {
    HeadingTag = "h5";
    headingClass = "";
    subtitleClass = "";
    titleMargin = "mb-2";
    subtitleMargin = "mb-0";
  } else {
    HeadingTag = "h2";
    headingClass = "display-5";
    subtitleClass = "lead";
    titleMargin = "mb-2";
    subtitleMargin = "mb-4";
  }
  
  const subtitleTextColor = textColor === "white" ? "text-white" : "text-muted";
  const titleTextColor = textColor === "white" ? "text-white" : "";
  
  const content = (
    <>
      <HeadingTag className={`${headingClass} fw-bold ${titleMargin} ${titleTextColor}`}>
        {titleElement}
      </HeadingTag>
      {subtitle && (
        <p className={`${subtitleClass} ${subtitleTextColor} ${subtitleMargin}`}>
          {subtitle}
        </p>
      )}
    </>
  );

  if (variant === "inline" || variant === "newsletter") {
    return content;
  }

  return (
    <section className="pt-4">
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 text-center">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
