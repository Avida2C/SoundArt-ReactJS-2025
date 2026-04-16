import React from "react";

const VARIANT_CONFIG = {
  section: {
    headingTag: "h2",
    headingClass: "display-5",
    subtitleClass: "lead",
    titleMargin: "mb-2",
    subtitleMargin: "mb-0",
  },
  newsletter: {
    headingTag: "h2",
    headingClass: "display-5",
    subtitleClass: "lead",
    titleMargin: "mb-0",
    subtitleMargin: "mb-0",
  },
  inline: {
    headingTag: "h5",
    headingClass: "",
    subtitleClass: "",
    titleMargin: "mb-0",
    subtitleMargin: "mb-0",
  },
};

const DEFAULT_CONFIG = {
  headingTag: "h2",
  headingClass: "display-5",
  subtitleClass: "lead",
  titleMargin: "mb-0",
  subtitleMargin: "mb-0",
};

export default function SectionTitle({
  title,
  subtitle,
  variant = "section",
  titleIcon,
  textColor = "default",
}) {
  const titleElement = titleIcon ? (
    <>
      <i className={`${titleIcon} text-warning me-2`}></i>
      {title}
    </>
  ) : (
    title
  );

  const config = VARIANT_CONFIG[variant] || DEFAULT_CONFIG;
  const HeadingTag = config.headingTag;
  const subtitleTextColor = textColor === "white" ? "text-white" : "text-muted";
  const titleTextColor = textColor === "white" ? "text-white" : "";

  const content = (
    <>
      <HeadingTag
        className={`sa-section-measure ${config.headingClass} fw-bold ${config.titleMargin} ${titleTextColor}`}
      >
        {titleElement}
      </HeadingTag>
      {subtitle && (
        <p
          className={`sa-section-measure ${config.subtitleClass} ${subtitleTextColor} ${config.subtitleMargin}`}
        >
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
