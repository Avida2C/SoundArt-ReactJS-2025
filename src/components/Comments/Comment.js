import React from "react";

/**
 * Comment Component - Displays a single user comment
 * @param {Object} comment - Comment object with author, content, date, etc.
 */
export default function Comment({ comment }) {
  if (!comment) return null;

  // Format timestamp with time first, then date
  const formatTimestamp = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    // For recent comments, show relative time with clock icon
    if (diffInSeconds < 60) {
      return (
        <span className="d-flex align-items-center gap-1">
          <i className="bi bi-clock"></i>
          <span>just now</span>
        </span>
      );
    }
    if (diffInSeconds < 3600) {
      return (
        <span className="d-flex align-items-center gap-1">
          <i className="bi bi-clock"></i>
          <span>{Math.floor(diffInSeconds / 60)} minutes ago</span>
        </span>
      );
    }
    if (diffInSeconds < 86400) {
      return (
        <span className="d-flex align-items-center gap-1">
          <i className="bi bi-clock"></i>
          <span>{Math.floor(diffInSeconds / 3600)} hours ago</span>
        </span>
      );
    }
    
    // For older comments, show time first, then date with icons
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return (
      <span className="d-flex align-items-center gap-2">
        <span className="d-flex align-items-center gap-1">
          <i className="bi bi-clock"></i>
          <span>{hours}:{minutes}</span>
        </span>
        <span className="d-flex align-items-center gap-1">
          <i className="bi bi-calendar"></i>
          <span>{day}/{month}/{year}</span>
        </span>
      </span>
    );
  };

  return (
    <div className="card mb-3 border-0 rounded" style={{ boxShadow: '0 0.125rem 0.5rem rgba(0, 0, 0, 0.1)' }}>
      <div className="card-body p-4">
        <div className="d-flex align-items-start">
          <div className="flex-shrink-0 me-3">
            <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
              <i className="bi bi-person-fill text-white" style={{ fontSize: '1.5rem' }}></i>
            </div>
          </div>
          <div className="flex-grow-1">
            <h6 className="mb-2 fw-bold text-warning">{comment.author}</h6>
            <p className="mb-3 text-dark">{comment.content}</p>
            <div className="border-top pt-3 mt-3 d-flex justify-content-end">
              <small className="text-muted d-flex align-items-center">
                {formatTimestamp(comment.date)}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
