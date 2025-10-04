import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import articlesData from "../../assets/data/Articles/articlesData";

export default function ArticlePage() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const article = articlesData.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="display-4 text-muted">Article Not Found</h2>
            <p className="lead">The article you're looking for doesn't exist.</p>
            <Link to="/news" className="btn btn-warning">
              Back to News
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Article Header */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
      }}>
        <div className="container text-white">
          <div className="row">
            <div className="col-12">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/news" className="text-white-50">News</Link></li>
                  <li className="breadcrumb-item active text-warning" aria-current="page">{article.title}</li>
                </ol>
              </nav>
              
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h1 className="display-4 fw-bold mb-4">{article.title}</h1>
                  <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person-circle me-2 text-warning"></i>
                      <span className="text-white-50">By {article.author}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-calendar me-2 text-warning"></i>
                      <span className="text-white-50">{article.date}</span>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <button className="btn btn-warning">
                      <i className="bi bi-share me-2"></i>Share
                    </button>
                    <button className="btn btn-outline-light">
                      <i className="bi bi-bookmark me-2"></i>Save
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <img 
                    src={article.image1} 
                    alt={article.title}
                    className="img-fluid rounded-4 shadow-lg"
                    style={{maxHeight: '300px', objectFit: 'cover'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="article-content">
                {/* Featured Image */}
                <div className="mb-5">
                  <img 
                    src={article.image2} 
                    alt={article.title}
                    className="img-fluid rounded shadow"
                    style={{width: '100%', height: '400px', objectFit: 'cover'}}
                  />
                </div>

                {/* Article Text */}
                <div className="article-text">
                  {article.content.map((paragraph, index) => (
                    <p key={index} className="lead mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Article Actions */}
                <div className="d-flex gap-3 mt-5 pt-4 border-top">
                  <button className="btn btn-warning">
                    <i className="bi bi-heart me-2"></i>Like Article
                  </button>
                  <button className="btn btn-outline-warning">
                    <i className="bi bi-share me-2"></i>Share Article
                  </button>
                  <button className="btn btn-outline-secondary">
                    <i className="bi bi-bookmark me-2"></i>Save for Later
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{top: '2rem'}}>
                {/* Related Articles */}
                <div className="card mb-4">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <i className="bi bi-newspaper me-2"></i>Related Articles
                    </h5>
                  </div>
                  <div className="card-body">
                    {articlesData
                      .filter(a => a.id !== article.id)
                      .slice(0, 3)
                      .map((relatedArticle) => (
                        <div key={relatedArticle.id} className="mb-3">
                          <Link to={`/article/${relatedArticle.id}`} className="text-decoration-none">
                            <div className="d-flex gap-3">
                              <img 
                                src={relatedArticle.image1} 
                                alt={relatedArticle.title}
                                className="rounded"
                                style={{width: '80px', height: '60px', objectFit: 'cover'}}
                              />
                              <div>
                                <h6 className="mb-1 text-dark">{relatedArticle.title}</h6>
                                <small className="text-muted">{relatedArticle.date}</small>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="card bg-warning text-dark">
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      <i className="bi bi-envelope me-2"></i>Stay Updated
                    </h5>
                    <p className="card-text">
                      Get the latest music news and stories delivered to your inbox
                    </p>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter your email"
                      />
                    </div>
                    <button className="btn btn-dark w-100">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Social Share */}
                <div className="card mt-4">
                  <div className="card-header">
                    <h6 className="mb-0">
                      <i className="bi bi-share me-2"></i>Share This Article
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary btn-sm flex-fill">
                        <i className="bi bi-facebook me-1"></i>Facebook
                      </button>
                      <button className="btn btn-info btn-sm flex-fill">
                        <i className="bi bi-twitter me-1"></i>Twitter
                      </button>
                      <button className="btn btn-success btn-sm flex-fill">
                        <i className="bi bi-whatsapp me-1"></i>WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h3 className="mb-4">
                <i className="bi bi-chat-dots me-2"></i>Comments
              </h3>
              
              {isAuthenticated ? (
                <>
                  {/* Comment Form */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h6 className="card-title">Leave a Comment</h6>
                      <form>
                        <div className="mb-3">
                          <textarea 
                            className="form-control" 
                            rows="4" 
                            placeholder="Share your thoughts about this article..."
                          ></textarea>
                        </div>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="Your name"
                            />
                          </div>
                          <div className="col-md-6">
                            <input 
                              type="email" 
                              className="form-control" 
                              placeholder="Your email"
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-warning mt-3">
                          <i className="bi bi-send me-2"></i>Post Comment
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* Sample Comments */}
                  <div className="comments-list">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                              <i className="bi bi-person-fill text-dark"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="mb-0">Music Lover</h6>
                              <small className="text-muted">2 hours ago</small>
                            </div>
                            <p className="mb-0">Amazing article! I never knew these details about The Beatles. Thanks for sharing this fascinating story.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                              <i className="bi bi-person-fill text-dark"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="mb-0">Beatles Fan</h6>
                              <small className="text-muted">5 hours ago</small>
                            </div>
                            <p className="mb-0">These rare photos are incredible! It's amazing to see them before they became famous. Great find!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-lock-fill text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                  <h4 className="mb-3">Join the Discussion</h4>
                  <p className="text-muted mb-4">
                    Sign in to read comments from fellow music fans and share your thoughts about this article.
                  </p>
                  <button 
                    className="btn btn-warning"
                    onClick={() => {
                      // This would trigger the auth modal
                      window.location.href = '/social';
                    }}
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>Sign In to View Comments
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <Link to="/news" className="btn btn-outline-warning btn-lg">
                <i className="bi bi-arrow-left me-2"></i>Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


