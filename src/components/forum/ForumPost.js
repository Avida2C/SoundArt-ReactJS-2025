import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { formatDate } from '../../utils/helpers';
import { formatNumber } from '../../utils/helpers';

const ForumPost = ({ post, onReply, onLike, onShare, onPostClick, onTagClick }) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showReplies, setShowReplies] = useState(false);
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
      setShowReplies(true);
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
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        {/* Post Header */}
        <div className="d-flex align-items-start mb-3">
          <img
            src={post.author.avatar}
            alt={post.author.username}
            className="rounded-circle me-3"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 
                    className="mb-1 fw-bold text-primary" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/profile/${post.author.username}`)}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                  >
                    {post.author.firstName} {post.author.lastName}
                  </h6>
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

        {/* Post Content */}
        <div className="mb-3">
          <h5 
            className="card-title mb-2 text-primary" 
            style={{ cursor: 'pointer', fontWeight: '600' }}
            onClick={() => onPostClick && onPostClick(post)}
            onMouseEnter={(e) => e.target.style.color = '#0d6efd'}
            onMouseLeave={(e) => e.target.style.color = '#0d6efd'}
          >
            {post.title}
          </h5>
          <p className="card-text">{post.content}</p>
          
          {/* Post Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-3">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="badge bg-light text-dark border me-1"
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
          )}
        </div>

        {/* Last Activity */}
        {post.replies && post.replies.length > 0 && (
          <div className="mb-3 p-2 bg-light rounded">
            <small className="text-muted">
              <i className="bi bi-clock me-1"></i>
              Last activity: {getRelativeTime(post.replies[post.replies.length - 1].createdAt)} by {post.replies[post.replies.length - 1].author.firstName}
            </small>
          </div>
        )}

        {/* Post Actions */}
        <div className="d-flex justify-content-between align-items-center">
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
              onClick={() => setShowReplies(!showReplies)}
            >
              <i className="bi bi-chat-dots me-1"></i>
              {formatNumber(post.replies?.length || 0)}
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

        {/* Reply Form */}
        {isAuthenticated && (
          <div className="mt-3 pt-3 border-top">
            <div className="d-flex gap-2">
              <img
                src={user.avatar}
                alt={user.username}
                className="rounded-circle"
                style={{ width: '35px', height: '35px', objectFit: 'cover' }}
              />
              <div className="flex-grow-1">
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Write a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <div className="d-flex justify-content-end mt-2">
                  <button
                    className="btn btn-warning btn-sm"
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
        )}

        {/* Replies */}
        {showReplies && post.replies && post.replies.length > 0 && (
          <div className="mt-3 pt-3 border-top">
            <h6 className="mb-3">Replies ({post.replies.length})</h6>
            {post.replies.map((reply, index) => (
              <div key={index} className="d-flex mb-3">
                <img
                  src={reply.author.avatar}
                  alt={reply.author.username}
                  className="rounded-circle me-3"
                  style={{ width: '35px', height: '35px', objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start mb-1">
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
                  <p className="mb-0 text-muted">{reply.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumPost;
