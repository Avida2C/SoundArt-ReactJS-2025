import React from 'react';

const WelcomeModal = ({ show, onHide, user }) => {
  if (!show) return null;

  return (
    <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div 
              className="text-white p-5 text-center"
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                borderRadius: '0.375rem'
              }}
            >
          <div className="mb-4">
            <div className="position-relative d-inline-block mb-4">
              <div className="welcome-glow position-absolute" style={{
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,193,7,0.4) 0%, transparent 70%)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1
              }}></div>
              <i className="bi bi-music-note-beamed text-warning" style={{fontSize: '5rem'}}></i>
            </div>
            
            <h2 className="fw-bold mb-3">
              Welcome to the <span className="text-warning">Music Universe</span>, {user?.firstName}!
            </h2>
            <p className="lead mb-4">
              You've just unlocked a world of music discovery, social connections, and exclusive features!
            </p>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-heart-fill text-warning mb-2" style={{fontSize: '2rem'}}></i>
                <h6 className="fw-bold">Save Favorites</h6>
                <small className="text-muted">Build your personal music collection</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-people-fill text-warning mb-2" style={{fontSize: '2rem'}}></i>
                <h6 className="fw-bold">Connect & Discuss</h6>
                <small className="text-muted">Join our vibrant music community</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-calendar-event-fill text-warning mb-2" style={{fontSize: '2rem'}}></i>
                <h6 className="fw-bold">Concert Meetups</h6>
                <small className="text-muted">Find friends for your next show</small>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-12">
              <div className="alert alert-warning text-dark">
                <h6 className="fw-bold mb-2">
                  <i className="bi bi-star-fill me-2"></i>
                  What's New & Unlocked:
                </h6>
                <ul className="list-unstyled mb-0">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Advanced search & filtering on all pages</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Personal favorites and wishlist</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Music forum and discussions</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Concert ticket purchasing</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Social profiles and following</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Activity feed and notifications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <button 
              className="btn btn-warning btn-lg"
              onClick={onHide}
            >
              <i className="bi bi-rocket me-2"></i>
              Start Exploring!
            </button>
            <button 
              className="btn btn-outline-light btn-lg"
              onClick={() => {
                onHide();
                // Navigate to social page
                window.location.href = '/social';
              }}
            >
              <i className="bi bi-people me-2"></i>
              Join Community
            </button>
          </div>

          <div className="mt-4">
            <small className="text-muted">
              <i className="bi bi-info-circle me-1"></i>
              Your account is now active with all premium features unlocked!
            </small>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
