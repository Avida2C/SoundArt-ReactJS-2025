import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import articlesData from "../assets/data/Articles/articlesData";
import { useDebounce } from "../hooks";
import { formatNumber } from "../utils/helpers";

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(articlesData.map(article => article.category))];
    return cats;
  }, []);

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articlesData.filter(article => {
      const matchesSearch = debouncedSearchTerm === '' || 
        article.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        article.content.some(paragraph => paragraph.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) ||
        article.tags.some(tag => tag.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort articles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'views':
          return b.views - a.views;
        case 'likes':
          return b.likes - a.likes;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [debouncedSearchTerm, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredAndSortedArticles.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm, selectedCategory, sortBy]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`btn ${i === currentPage ? 'btn-warning' : 'btn-outline-warning'} mx-1`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <button
          className="btn btn-outline-warning me-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        {pages}
        <button
          className="btn btn-outline-warning ms-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
      }}>
        <div className="container text-white">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Music <span className="text-warning">News</span>
              </h1>
              <p className="lead mb-4">
                Stay updated with the latest stories, rare discoveries, and fascinating insights from the world of legendary music artists.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-warning btn-lg" onClick={() => document.querySelector('.search-section').scrollIntoView({ behavior: 'smooth' })}>
                  <i className="bi bi-newspaper me-2"></i>Explore Articles
                </button>
                <Link to="/" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-house me-2"></i>Back to Home
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="position-relative">
                <div className="hero-glow position-absolute" style={{
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(255,193,7,0.3) 0%, transparent 70%)',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: -1
                }}></div>
                <img 
                  src="/images/thebeatles1967.jpg" 
                  alt="Music News" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{maxHeight: '300px', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Search and Filter Section */}
          <section className="py-4 bg-light search-section">
            <div className="container">
              <div className="row g-3 align-items-center">
                <div className="col-lg-4">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search articles, authors, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setSearchTerm('')}
                      >
                        <i className="bi bi-x"></i>
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-lg-3">
                  <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-3">
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="date">Sort by Date</option>
                    <option value="views">Sort by Views</option>
                    <option value="likes">Sort by Likes</option>
                    <option value="title">Sort by Title</option>
                  </select>
                </div>
                <div className="col-lg-2">
                  <div className="text-end">
                    <small className="text-muted">
                      {filteredAndSortedArticles.length} articles found
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Articles Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Latest Stories</h2>
              <p className="lead text-muted">Discover fascinating stories from the world of music legends</p>
            </div>
          </div>
          
          {currentArticles.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-search text-muted mb-3 d-block" style={{fontSize: '3rem'}}></i>
              <h4 className="text-muted">No articles found</h4>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
              <button 
                className="btn btn-warning"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('date');
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {currentArticles.map((article, index) => (
                  <div key={article.id} className="col-lg-4 col-md-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="position-relative">
                        <img 
                          src={article.image1} 
                          className="card-img-top article-thumbnail" 
                          alt={article.title}
                          style={{height: '250px', objectFit: 'cover'}}
                        />
                        <div className="position-absolute top-0 start-0 m-2">
                          <span className="badge bg-warning text-dark">{article.category}</span>
                        </div>
                        <div className="position-absolute top-0 end-0 m-2">
                          <span className="badge bg-dark bg-opacity-75">
                            <i className="bi bi-clock me-1"></i>{article.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <small className="text-muted">
                            <i className="bi bi-person me-1"></i>{article.author}
                          </small>
                          <small className="text-muted">
                            <i className="bi bi-calendar me-1"></i>{article.date}
                          </small>
                        </div>
                        <h5 className="card-title fw-bold mb-3">
                          {article.title}
                        </h5>
                        <p className="card-text text-muted flex-grow-1">
                          {article.content[0].substring(0, 120)}...
                        </p>
                        
                        {/* Tags */}
                        <div className="mb-3">
                          <div className="d-flex flex-wrap gap-1">
                            {article.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span key={tagIndex} className="badge bg-light text-dark border">
                                {tag}
                              </span>
                            ))}
                            {article.tags.length > 3 && (
                              <span className="badge bg-light text-muted border">
                                +{article.tags.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex gap-3">
                            <small className="text-muted">
                              <i className="bi bi-eye me-1"></i>{formatNumber(article.views)}
                            </small>
                            <small className="text-muted">
                              <i className="bi bi-heart me-1"></i>{formatNumber(article.likes)}
                            </small>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <Link 
                            to={`/article/${article.id}`} 
                            className="btn btn-warning w-100"
                          >
                            <i className="bi bi-arrow-right me-2"></i>
                            Read Full Story
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {renderPagination()}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="fw-bold mb-3">Stay Updated</h3>
              <p className="lead text-muted mb-4">
                Get the latest music news and stories delivered to your inbox
              </p>
              <div className="row g-3 justify-content-center">
                <div className="col-md-6">
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="col-md-3">
                  <button className="btn btn-warning btn-lg w-100">
                    <i className="bi bi-envelope me-2"></i>Subscribe
                  </button>
                </div>
              </div>
              <small className="text-muted mt-3 d-block">
                We respect your privacy. Unsubscribe at any time.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="fw-bold mb-3">Browse by Category</h3>
              <p className="text-muted">Explore stories by your favorite artists and topics</p>
            </div>
          </div>
          
          <div className="row g-4">
            {categories.slice(1).map((category, index) => (
              <div key={category} className="col-lg-3 col-md-6">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <i className={`bi bi-${getCategoryIcon(category)} text-warning mb-3 d-block`} style={{fontSize: '3rem'}}></i>
                    <h5 className="card-title">{category}</h5>
                    <p className="card-text text-muted">
                      {articlesData.filter(article => article.category === category).length} articles
                    </p>
                    <button 
                      className="btn btn-outline-warning"
                      onClick={() => setSelectedCategory(category)}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to get category icons
function getCategoryIcon(category) {
  const iconMap = {
    'Exclusive': 'star-fill',
    'Analysis': 'graph-up',
    'Legacy': 'award',
    'Metal': 'lightning',
    'History': 'book',
    'Progressive Rock': 'music-note-beamed',
    'Hard Rock': 'fire',
    'Rock and Roll': 'music-note',
    'Grunge': 'cloud-rain',
    'Technology': 'cpu',
    'Live Performance': 'mic',
    'Culture': 'people'
  };
  return iconMap[category] || 'newspaper';
}


