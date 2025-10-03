import React from "react";
import { useParams, Link } from "react-router-dom";
import CommentsSection from "../../components/Articles/CommentsSection";
import ArticleContent from "../../components/Articles/ArticleComponent";
import articlesData from "../../data/Articles/articlesData";

const ArticlePage = () => {
  const { id } = useParams(); // Get article ID from URL
  console.log("Article ID from URL:", id);
  console.log("Available articles:", articlesData.map(a => a.id));
  
  const article = articlesData.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="display-4 text-muted">Article Not Found</h2>
            <p className="lead">The article you're looking for doesn't exist.</p>
            <p className="text-muted">Available article IDs: {articlesData.map(a => a.id).join(", ")}</p>
            <a href="/news" className="btn btn-warning">
              Back to News
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {/* Back to News Navigation */}
      <div className="row mb-4">
        <div className="col-12">
          <Link to="/news" className="btn btn-outline-warning mb-3">
            <i className="bi bi-arrow-left me-2"></i>Back to News
          </Link>
        </div>
      </div>

      <div className="row">
        {/* Main Article Content */}
        <div className="col-lg-8">
          <ArticleContent {...article} />
        </div>

        {/* Top Stories Sidebar */}
        <div className="col-lg-4">
          <div className="position-sticky" style={{top: '2rem'}}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Top Stories</h5>
                <ul className="list-unstyled mb-0">
                  {articlesData
                    .filter(a => a.id !== article.id)
                    .slice(0, 5)
                    .map((topArticle) => (
                      <li key={topArticle.id} className="mb-3">
                        <Link to={`/article/${topArticle.id}`} className="text-decoration-none">
                          <div className="d-flex gap-3">
                            <img 
                              src={topArticle.image1} 
                              alt={topArticle.title} 
                              style={{width: 70, height: 50, objectFit: 'cover'}} 
                              className="rounded" 
                            />
                            <div>
                              <h6 className="mb-1 text-dark">{topArticle.title}</h6>
                              <small className="text-muted">{topArticle.date}</small>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Redirect to News Button */}
            <div className="card">
              <div className="card-body text-center">
                <h6 className="card-title">Want more stories?</h6>
                <p className="card-text text-muted small">Discover all our latest articles with search and filters.</p>
                <Link to="/news" className="btn btn-warning w-100">
                  <i className="bi bi-newspaper me-2"></i>Browse All News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="row mt-5">
        <div className="col-lg-8">
          <CommentsSection />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
