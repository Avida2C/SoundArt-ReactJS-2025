import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { NewsletterSection, HeroSection, MoreStories, NewsletterSidebar } from "../../components/layout";
import ArticleMeta from "../../components/Article/ArticleMeta";
import { Comment, CommentForm } from "../../components/Comments";
import { formatNumber, formatDateShort, truncateText } from "../../utils/helpers";
import articlesData from "../../data/Articles/articlesData";
import { getCommentsByArticleId } from "../../data/Comments/commentsData";
import { usePageTitle } from "../../hooks";
import "../../styles/home.css";
import "../../styles/contact.css";
import "../../styles/news.css";

function articleBreadcrumbTitleMax() {
  if (typeof window === "undefined") return 24;
  const w = window.innerWidth;
  if (w < 400) return 16;
  if (w < 576) return 18;
  if (w < 768) return 26;
  if (w < 992) return 38;
  return 52;
}

export default function ArticlePage() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const article = articlesData.find(a => a.id === Number(id));
  const comments = article ? getCommentsByArticleId(article.id) : [];
  const [breadcrumbTitleMax, setBreadcrumbTitleMax] = useState(articleBreadcrumbTitleMax);

  useEffect(() => {
    const onResize = () => setBreadcrumbTitleMax(articleBreadcrumbTitleMax());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  usePageTitle(article ? article.title : "Article");

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
      <HeroSection
        title={article.title}
        breadcrumbs={[
          { to: "/", text: "Home" },
          { to: "/news", text: "News" },
          {
            text: truncateText(article.title, breadcrumbTitleMax),
            fullTitle: article.title,
          },
        ]}
        variant="split"
        children={
          <div className="article-header-meta d-flex align-items-center gap-4 mb-4">
            <div className="d-flex align-items-center">
              <i className="bi bi-person-circle me-2 text-warning"></i>
              <span className="text-white-50">By {article.author}</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-calendar me-2 text-warning"></i>
              <span className="text-white-50">{formatDateShort(article.date)}</span>
            </div>
          </div>
        }
      />

      {/* Article Content */}
      <section className="article-main-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="article-content">
                {/* Featured Image */}
                <div className="mb-5">
                  <img 
                    src={article.image2} 
                    alt={article.title}
                    className="article-featured-image img-fluid rounded shadow"
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

                {/* Article Meta (Tags, Metrics, Actions) */}
                <ArticleMeta 
                  article={article}
                  onShare={() => {
                    // Handle share functionality
                    console.log("Share article:", article.id);
                  }}
                  onSave={() => {
                    // Handle save functionality
                    console.log("Save article:", article.id);
                  }}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="article-sidebar sticky-top">
                {/* More Stories Sidebar */}
                <div className="mb-4 news-sidebar">
                  <h4 className="fw-bold mb-4">More Stories</h4>
                  {articlesData
                    .filter(a => a.id !== article.id)
                    .slice(0, 3)
                    .map((relatedArticle) => (
                      <div key={relatedArticle.id} className="news-item mb-3">
                        <Link to={`/article/${relatedArticle.id}`} className="text-decoration-none text-dark">
                          <div className="d-flex gap-3">
                            <img 
                              src={relatedArticle.image1} 
                              alt={relatedArticle.title}
                              className="rounded news-thumbnail"
                            />
                            <div className="flex-grow-1">
                              <h6 className="mb-1 fw-semibold">{relatedArticle.title}</h6>
                              <div className="d-flex align-items-center gap-3 flex-wrap">
                                <small className="text-muted d-flex align-items-center">
                                  <i className="bi bi-calendar me-1"></i>
                                  {formatDateShort(relatedArticle.date)}
                                </small>
                                <small className="text-muted d-flex align-items-center">
                                  <i className="bi bi-eye me-1"></i>
                                  {formatNumber(relatedArticle.views || 0)}
                                </small>
                                <small className="text-muted d-flex align-items-center">
                                  <i className="bi bi-share me-1"></i>
                                  {formatNumber(relatedArticle.shares || relatedArticle.likes || 0)}
                                </small>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  <div className="mt-4">
                    <Link 
                      to="/news" 
                      className="article-view-all-btn text-decoration-none text-uppercase btn-outline-warning btn"
                    >
                      View All Stories
                    </Link>
                  </div>
                </div>

                {/* Newsletter Sidebar */}
                <NewsletterSidebar />

                {/* Social Share */}
                
          
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="article-comments-section py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h3 className="article-comments-title mb-4 fw-bold text-dark">Comments</h3>
              
              {/* Public Comments List */}
              <div className="comments-list mb-4">
                {comments.length > 0 ? (
                  comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                  ))
                ) : (
                  <p className="text-muted">No comments yet. Be the first to comment!</p>
                )}
              </div>

              {/* Leave a Comment Form */}
              <CommentForm 
                onSubmit={(formData) => {
                  // Handle form submission - could add comment to data or show success message
                  console.log("Comment submitted:", formData);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Stories Section */}
      <MoreStories 
        articles={articlesData
          .filter(a => a.id !== article.id)
          .slice(0, 3)
        } 
      />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}


