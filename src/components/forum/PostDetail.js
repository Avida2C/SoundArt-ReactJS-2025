import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { formatDate } from '../../utils/helpers';
import { formatNumber } from '../../utils/helpers';

const PostDetail = ({ post, onBack, onLike, onReply, onShare, onTagClick }) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [replyText, setReplyText] = useState('');
  const [isReplying, setIsReplying] = useState(false);

  // Function to get relative time (e.g., "2 mins ago", "1 hour ago")
  const getRelativeTime = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} sec${diffInSeconds !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else {
      return formatDate(dateString);
    }
  };

  const handleReply = async () => {
    if (!replyText.trim() || !isAuthenticated) return;
    
    setIsReplying(true);
    try {
      await onReply(post.id, replyText);
      setReplyText('');
    } catch (error) {
      console.error('Error posting reply:', error);
    } finally {
      setIsReplying(false);
    }
  };

  const handleLike = () => {
    if (!isAuthenticated) return;
    onLike(post.id);
  };

  const isLiked = user?.likedPosts?.includes(post.id) || false;

  return (
    <div className="container py-5">
      {/* Back Button */}
      <div className="row mb-4">
        <div className="col-12">
          <button 
            className="btn btn-outline-warning"
            onClick={onBack}
          >
            <i className="bi bi-arrow-left me-2"></i>Back to Forum
          </button>
        </div>
      </div>

      {/* Main Post */}
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg mb-4">
            <div className="card-body p-4">
              {/* Post Header */}
              <div className="d-flex align-items-start mb-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.username}
                  className="rounded-circle me-3"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h4 
                        className="mb-1 fw-bold text-primary" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate(`/profile/${post.author.username}`)}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                      >
                        {post.author.firstName} {post.author.lastName}
                      </h4>
                      <div className="d-flex align-items-center gap-2">
                        <small 
                          className="text-muted" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate(`/profile/${post.author.username}`)}
                          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                        >
                          @{post.author.username}
                        </small>
                        {post.author.reputation && (
                          <span className="badge bg-warning text-dark">
                            <i className="bi bi-star-fill me-1"></i>{post.author.reputation}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-end">
                      <small className="text-muted">{formatDate(post.createdAt)}</small>
                      <div className="d-flex gap-1 mt-1">
                        {post.isPinned && (
                          <span className="badge bg-warning text-dark">
                            <i className="bi bi-pin-angle-fill me-1"></i>Pinned
                          </span>
                        )}
                        {post.isLocked && (
                          <span className="badge bg-danger">
                            <i className="bi bi-lock-fill me-1"></i>Locked
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Title */}
              <h1 className="display-6 fw-bold mb-3">{post.title}</h1>

              {/* Post Content */}
              <div className="mb-4">
                <p className="lead">{post.content}</p>
              </div>

              {/* Post Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mb-4">
                  <div className="d-flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="badge bg-light text-dark border"
                        style={{ cursor: 'pointer' }}
                        onClick={() => onTagClick ? onTagClick(tag) : window.location.href = `/forum?tag=${encodeURIComponent(tag)}`}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#e9ecef';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Post Actions */}
              <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                <div className="d-flex gap-3">
                  <button
                    className={`btn btn-sm ${isLiked ? 'btn-danger' : 'btn-outline-secondary'}`}
                    onClick={handleLike}
                    disabled={!isAuthenticated}
                  >
                    <i className={`bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'} me-1`}></i>
                    {formatNumber(post.likes)}
                  </button>
                  
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => document.getElementById('replies-section').scrollIntoView({ behavior: 'smooth' })}
                  >
                    <i className="bi bi-chat-dots me-1"></i>
                    {formatNumber(post.replies?.length || 0)} replies
                  </button>
                  
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => onShare(post)}
                  >
                    <i className="bi bi-share me-1"></i>
                    Share
                  </button>
                </div>
                
                <div className="text-muted small">
                  <i className="bi bi-eye me-1"></i>
                  {formatNumber(post.views)} views
                </div>
              </div>
            </div>
          </div>

          {/* Reply Form */}
          {isAuthenticated && (
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h5 className="mb-3">
                  <i className="bi bi-reply me-2"></i>Leave a Reply
                </h5>
                <div className="d-flex gap-3">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  />
                  <div className="flex-grow-1">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Share your thoughts..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="d-flex justify-content-end mt-2">
                      <button
                        className="btn btn-warning"
                        onClick={handleReply}
                        disabled={!replyText.trim() || isReplying}
                      >
                        {isReplying ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                            Posting...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-1"></i>
                            Reply
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Replies Section */}
          <div id="replies-section">
            <h4 className="mb-4">
              <i className="bi bi-chat-dots me-2"></i>
              Replies ({post.replies?.length || 0})
            </h4>

            {post.replies && post.replies.length > 0 ? (
              <div className="replies-list">
                {post.replies.map((reply, index) => (
                  <div key={index} className="card border-0 shadow-sm mb-3">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <img
                          src={reply.author.avatar}
                          alt={reply.author.username}
                          className="rounded-circle me-3"
                          style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                        />
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div className="d-flex align-items-center gap-2">
                              <h6 
                                className="mb-0 fw-semibold text-primary" 
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate(`/profile/${reply.author.username}`)}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                              >
                                {reply.author.firstName} {reply.author.lastName}
                              </h6>
                              {reply.author.reputation && (
                                <span className="badge bg-light text-dark border">
                                  <i className="bi bi-star-fill me-1"></i>{reply.author.reputation}
                                </span>
                              )}
                            </div>
                            <div className="d-flex align-items-center gap-2">
                              {reply.likes > 0 && (
                                <small className="text-muted">
                                  <i className="bi bi-heart-fill text-danger me-1"></i>{reply.likes}
                                </small>
                              )}
                              <small className="text-muted">{formatDate(reply.createdAt)}</small>
                            </div>
                          </div>
                          <p className="mb-0">{reply.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <i className="bi bi-chat-dots text-muted mb-3 d-block" style={{fontSize: '3rem'}}></i>
                <h5 className="text-muted">No replies yet</h5>
                <p className="text-muted">Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="sticky-top" style={{top: '2rem'}}>
            {/* Author Info */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-warning text-dark">
                <h6 className="mb-0">
                  <i className="bi bi-person me-2"></i>About the Author
                </h6>
              </div>
              <div className="card-body text-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.username}
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <h6 
                  className="fw-bold text-primary" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.location.href = `/profile/${post.author.username}`}
                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                  {post.author.firstName} {post.author.lastName}
                </h6>
                <p 
                  className="text-muted mb-2" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.location.href = `/profile/${post.author.username}`}
                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                  @{post.author.username}
                </p>
                {post.author.reputation && (
                  <span className="badge bg-warning text-dark mb-3">
                    <i className="bi bi-star-fill me-1"></i>{post.author.reputation} reputation
                  </span>
                )}
                {post.author.joinDate && (
                  <p className="text-muted small">
                    Member since {new Date(post.author.joinDate).toLocaleDateString()}
                  </p>
                )}
                {isAuthenticated && (
                  <button className="btn btn-outline-warning btn-sm">
                    <i className="bi bi-person-plus me-1"></i>Follow
                  </button>
                )}
              </div>
            </div>

            {/* Related Posts */}
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-warning text-dark">
                <h6 className="mb-0">
                  <i className="bi bi-collection me-2"></i>Related Posts
                </h6>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item border-0 px-0">
                    <h6 className="mb-1">Best guitar solos of all time</h6>
                    <small className="text-muted">31 likes • 287 views</small>
                  </div>
                  <div className="list-group-item border-0 px-0">
                    <h6 className="mb-1">Vinyl vs Digital debate</h6>
                    <small className="text-muted">27 likes • 198 views</small>
                  </div>
                  <div className="list-group-item border-0 px-0">
                    <h6 className="mb-1">Concert photography tips</h6>
                    <small className="text-muted">9 likes • 134 views</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
