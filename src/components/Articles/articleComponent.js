import React from "react";

const ArticleContent = ({ title, author, date, image1, image2, content }) => {
  return (
    <div className="col-lg-8">
      <h1>{title}</h1>
      <p className="text-muted">{author} • {date}</p>

      <img src={image1} alt={title} className="img-fluid mb-3" />
      <p className="text-muted">
        The Beatles’ George Harrison, Paul McCartney, John Lennon, and
        original drummer Pete Best play a gig at the Cavern Club in
        Liverpool. Courtesy of Tracks Ltd.
      </p>

      {/* Social Share Icons */}
      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-light border">
          <i className="bi bi-share"></i> Share
        </button>
        <button className="btn btn-light border">
          <i className="bi bi-facebook"></i> Facebook
        </button>
        <button className="btn btn-light border">
          <i className="bi bi-twitter"></i> Twitter
        </button>
      </div>

      {/* Article Content */}
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <img src={image2} alt="Additional Image" className="img-fluid my-3" />
    </div>
  );
};

export default ArticleContent;
