import React from "react";

const ArticleContent = ({ title, author, date, image1, image2, content }) => {
  return (
    <div className="col-lg-8">
      {/* Article Header */}
      <div className="mb-4">
        <h1 className="display-5 fw-bold mb-3">{title}</h1>
        <p className="text-dark mb-0">{author} • {date}</p>
      </div>

      {/* Main Image */}
      <div className="mb-3">
        <img src={image1} alt={title} className="img-fluid w-100" />
        <p className="text-dark mt-2 mb-4">
          The Beatles' George Harrison, Paul McCartney, John Lennon, and
          original drummer Pete Best play a gig at the Cavern Club in
          Liverpool. Courtesy of Tracks Ltd.
        </p>
      </div>

      {/* Social Share Buttons */}
      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-outline-secondary border-0 px-3 py-2">
          <i className="bi bi-share me-2"></i>Share
        </button>
        <div className="vr"></div>
        <button className="btn btn-outline-secondary border-0 px-3 py-2">
          <i className="bi bi-facebook me-2"></i>Facebook
        </button>
        <div className="vr"></div>
        <button className="btn btn-outline-secondary border-0 px-3 py-2">
          <i className="bi bi-twitter me-2"></i>Twitter
        </button>
      </div>

      {/* Article Content */}
      <div className="article-content">
        {content && content.map((paragraph, index) => (
          <p key={index} className="mb-3 text-dark">{paragraph}</p>
        ))}
      </div>

      {/* External Link */}
      <div className="my-4">
        <a href="#" className="text-dark text-decoration-none">
          See Rare Photos of the Beatles Before They Were Famous | Smart News| Smithsonian Magazine
        </a>
      </div>

      {/* Additional Image */}
      {image2 && (
        <div className="my-4">
          <img src={image2} alt="Additional content" className="img-fluid w-100" />
        </div>
      )}
    </div>
  );
};

export default ArticleContent;
