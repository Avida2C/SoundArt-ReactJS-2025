import React, { useState } from "react";

export default function ReviewsSection({ artistId, artistName }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "MusicLover42",
      rating: 5,
      date: "2024-11-15",
      comment: "Absolutely legendary! Their music has been the soundtrack of my life. Every song is a masterpiece.",
      verified: true
    },
    {
      id: 2,
      user: "RockFan99",
      rating: 5,
      date: "2024-11-10",
      comment: "One of the greatest bands of all time. Their influence on music is undeniable. Pure genius!",
      verified: true
    },
    {
      id: 3,
      user: "VinylCollector",
      rating: 4,
      date: "2024-11-05",
      comment: "Incredible discography. Some albums are absolute perfection, others are just great. Overall amazing!",
      verified: false
    },
    {
      id: 4,
      user: "ConcertGoer",
      rating: 5,
      date: "2024-10-28",
      comment: "Saw them live and it was life-changing. The energy, the music, everything was perfect. Worth every penny!",
      verified: true
    },
    {
      id: 5,
      user: "BeatleManiac",
      rating: 5,
      date: "2024-10-20",
      comment: "Timeless music that never gets old. Every generation discovers them and falls in love. True legends!",
      verified: true
    },
    {
      id: 6,
      user: "ClassicRockFan",
      rating: 4,
      date: "2024-10-15",
      comment: "Their innovation in the studio was groundbreaking. Changed the way music was made forever.",
      verified: false
    },
    {
      id: 7,
      user: "MusicHistorian",
      rating: 5,
      date: "2024-10-10",
      comment: "From their early pop hits to their experimental later work, they evolved constantly. Incredible journey.",
      verified: true
    },
    {
      id: 8,
      user: "GuitarPlayer",
      rating: 5,
      date: "2024-10-05",
      comment: "The songwriting is just incredible. Every melody, every lyric is crafted to perfection. Inspiring!",
      verified: false
    },
    {
      id: 9,
      user: "AlbumCollector",
      rating: 4,
      date: "2024-09-28",
      comment: "Some of their albums are perfect from start to finish. Abbey Road and Sgt. Pepper are masterpieces.",
      verified: true
    },
    {
      id: 10,
      user: "LiveMusicFan",
      rating: 5,
      date: "2024-09-20",
      comment: "Even their live performances were legendary. The energy and connection with the audience was magical.",
      verified: true
    },
    {
      id: 11,
      user: "MusicTeacher",
      rating: 5,
      date: "2024-09-15",
      comment: "I use their songs to teach music theory. The complexity hidden in seemingly simple melodies is amazing.",
      verified: false
    },
    {
      id: 12,
      user: "VinylEnthusiast",
      rating: 4,
      date: "2024-09-10",
      comment: "Their vinyl records sound incredible. The production quality was ahead of its time.",
      verified: true
    },
    {
      id: 13,
      user: "Songwriter",
      rating: 5,
      date: "2024-09-05",
      comment: "As a songwriter myself, I'm constantly amazed by their creativity and innovation. True masters of the craft.",
      verified: false
    },
    {
      id: 14,
      user: "MusicProducer",
      rating: 5,
      date: "2024-08-28",
      comment: "Their studio techniques revolutionized music production. Still learning from their innovations today.",
      verified: true
    },
    {
      id: 15,
      user: "ConcertPhotographer",
      rating: 4,
      date: "2024-08-20",
      comment: "Photographed many tribute shows. The love and respect for their music is universal and timeless.",
      verified: false
    },
    {
      id: 16,
      user: "MusicJournalist",
      rating: 5,
      date: "2024-08-15",
      comment: "Covered music for 20 years. No other band has had such lasting impact on popular culture.",
      verified: true
    },
    {
      id: 17,
      user: "RadioDJ",
      rating: 5,
      date: "2024-08-10",
      comment: "Their songs still get requested constantly on my show. Every generation loves them equally.",
      verified: true
    },
    {
      id: 18,
      user: "MusicStudent",
      rating: 4,
      date: "2024-08-05",
      comment: "Studying their compositions in music school. The harmonic progressions are genius-level.",
      verified: false
    },
    {
      id: 19,
      user: "FestivalOrganizer",
      rating: 5,
      date: "2024-07-28",
      comment: "Tribute acts to them always draw the biggest crowds. Their music brings people together like nothing else.",
      verified: true
    },
    {
      id: 20,
      user: "MusicCritic",
      rating: 4,
      date: "2024-07-20",
      comment: "Even their 'weaker' songs are better than most artists' best work. The consistency is remarkable.",
      verified: false
    }
  ]);

  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: ""
  });

  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, highest, lowest
  const reviewsPerPage = 5;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.comment.trim()) {
      const review = {
        id: reviews.length + 1,
        user: "Anonymous User",
        rating: newReview.rating,
        date: new Date().toISOString().split('T')[0],
        comment: newReview.comment,
        verified: false
      };
      setReviews([review, ...reviews]);
      setNewReview({ rating: 5, comment: "" });
      setShowForm(false);
    }
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(review => review.rating === rating).length
  );

  // Sorting logic
  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date) - new Date(a.date);
      case 'oldest':
        return new Date(a.date) - new Date(b.date);
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = sortedReviews.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return (
      <div className="d-flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`bi bi-star${star <= rating ? '-fill' : ''} ${
              interactive ? 'cursor-pointer' : ''
            } ${interactive ? 'text-warning' : 'text-warning'}`}
            style={{ 
              fontSize: interactive ? '1.5rem' : '1rem',
              cursor: interactive ? 'pointer' : 'default'
            }}
            onClick={interactive ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="reviews-section">
      {/* Reviews Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3 className="mb-2">Reviews & Ratings</h3>
              <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center">
                  {renderStars(Math.round(averageRating))}
                  <span className="ms-2 fw-bold">{averageRating.toFixed(1)}</span>
                </div>
                <span className="text-muted">({reviews.length} reviews)</span>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <select 
                className="form-select form-select-sm" 
                value={sortBy} 
                onChange={(e) => handleSortChange(e.target.value)}
                style={{width: 'auto'}}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
              </select>
              <button 
                className="btn btn-warning"
                onClick={() => setShowForm(!showForm)}
              >
                <i className="bi bi-pencil me-2"></i>Write Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Rating Breakdown</h6>
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="d-flex align-items-center mb-2">
                  <span className="me-2">{rating}</span>
                  {renderStars(rating)}
                  <div className="progress flex-grow-1 mx-2" style={{height: '8px'}}>
                    <div 
                      className="progress-bar bg-warning" 
                      style={{width: `${(ratingCounts[index] / reviews.length) * 100}%`}}
                    ></div>
                  </div>
                  <span className="text-muted small">{ratingCounts[index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Write Review Form */}
      {showForm && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-warning">
              <div className="card-body">
                <h6 className="card-title">Write a Review</h6>
                <form onSubmit={handleSubmitReview}>
                  <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <div className="d-flex align-items-center">
                      {renderStars(newReview.rating, true, (rating) => 
                        setNewReview({...newReview, rating})
                      )}
                      <span className="ms-2 text-muted">({newReview.rating} stars)</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Review</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Share your thoughts about this artist..."
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      required
                    />
                  </div>
                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-warning">
                      <i className="bi bi-send me-2"></i>Submit Review
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="row">
        {currentReviews.map((review) => (
          <div key={review.id} className="col-12 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center" 
                           style={{width: '40px', height: '40px'}}>
                        <i className="bi bi-person-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-1">
                        {review.user}
                        {review.verified && (
                          <i className="bi bi-patch-check-fill text-primary ms-1" title="Verified"></i>
                        )}
                      </h6>
                      <div className="d-flex align-items-center">
                        {renderStars(review.rating)}
                        <span className="text-muted small ms-2">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0">{review.comment}</p>
                <div className="mt-2">
                  <button className="btn btn-sm btn-outline-secondary me-2">
                    <i className="bi bi-hand-thumbs-up me-1"></i>Helpful
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    <i className="bi bi-reply me-1"></i>Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="row mt-4">
          <div className="col-12">
            <nav aria-label="Reviews pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                </li>
                
                {/* Show page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current page
                  if (
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                        <button 
                          className="page-link" 
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      </li>
                    );
                  } else if (
                    page === currentPage - 2 || 
                    page === currentPage + 2
                  ) {
                    return (
                      <li key={page} className="page-item disabled">
                        <span className="page-link">...</span>
                      </li>
                    );
                  }
                  return null;
                })}
                
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
            
            {/* Page info */}
            <div className="text-center mt-2">
              <small className="text-muted">
                Showing {startIndex + 1}-{Math.min(endIndex, sortedReviews.length)} of {sortedReviews.length} reviews
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
