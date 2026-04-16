import React, { useState, useMemo } from "react";
import { HeroSection, SectionTitle, NewsletterSection } from "../components/layout";
import { ArticleCard } from "../components/News";
import { heroData } from "../data/heroData";
import articlesData from "../data/Articles/articlesData";
import { useDebounce, usePageTitle } from "../hooks";
import SearchFilter from "../components/SearchFilter";
import { searchFilterConfigs } from "../data/searchFilterData";
import { sectionTitles } from "../data/sectionTitlesData";
import "../styles/news.css";

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(12);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  usePageTitle("News");

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
      <div className="d-flex justify-content-end align-items-center mt-5 pagination">
        <button
          className="btn btn-outline-warning"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        {pages}
        <button
          className="btn btn-outline-warning"
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
      <HeroSection
        title={heroData.news.title}
        titleHighlight={heroData.news.titleHighlight}
        description={heroData.news.description}
      />

      {/* Search and Filter Section */}
      <section className="py-4 bg-light search-section">
        <div className="container">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filterValue={selectedCategory}
            onFilterChange={setSelectedCategory}
            filterOptions={[
              { value: 'all', label: 'All Categories' },
              ...categories.slice(1).map(category => ({
                value: category,
                label: category
              }))
            ]}
            sortValue={sortBy}
            onSortChange={setSortBy}
            sortOptions={Object.entries(searchFilterConfigs.news.sortOptions).map(([value, label]) => ({
              value,
              label
            }))}
            resultCount={filteredAndSortedArticles.length}
            totalCount={articlesData.length}
            resultCountFormat={searchFilterConfigs.news.resultCountFormat}
            searchPlaceholder={searchFilterConfigs.news.searchPlaceholder}
          />
        </div>
      </section>

      {/* Section Title */}
      <SectionTitle
        title={sectionTitles.news.title}
        subtitle={sectionTitles.news.subtitle}
      />

      {/* Articles Section */}
      <section className="pb-5">
        <div className="container">
          
          
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
                {currentArticles.map((article) => (
                  <div key={article.id} className="col-lg-3 col-md-6">
                    <ArticleCard article={article} />
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
      <NewsletterSection />

      {/* Categories integrated into search section */}
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


