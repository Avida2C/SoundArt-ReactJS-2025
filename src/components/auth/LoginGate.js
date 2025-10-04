import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from './AuthModal';

const LoginGate = ({ children, feature, description }) => {
  const { isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  if (isAuthenticated) {
    return children;
  }

  return (
    <>
      {/* Blurred/Overlay Content */}
      <div style={{ 
        filter: 'blur(3px)', 
        pointerEvents: 'none',
        position: 'relative',
        opacity: 0.6
      }}>
        {children}
      </div>

      {/* Login Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1000,
          backdropFilter: 'blur(2px)'
        }}
      >
        <div className="text-center text-white p-4">
          <div className="mb-4">
            <i className="bi bi-lock-fill text-warning mb-3 d-block" style={{fontSize: '4rem'}}></i>
            <h3 className="fw-bold mb-3">
              Unlock <span className="text-warning">{feature}</span>
            </h3>
            <p className="lead mb-4">
              {description}
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <button 
                className="btn btn-warning btn-lg"
                onClick={() => setShowAuthModal(true)}
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Sign In to Unlock
              </button>
              <button 
                className="btn btn-outline-light btn-lg"
                onClick={() => setShowAuthModal(true)}
              >
                <i className="bi bi-person-plus me-2"></i>
                Join Now
              </button>
            </div>
          </div>
          
          <div className="row g-3 text-start">
            <div className="col-12">
              <div className="d-flex align-items-center">
                <i className="bi bi-heart text-warning me-3" style={{fontSize: '1.5rem'}}></i>
                <div>
                  <h6 className="mb-1">Save Favorites</h6>
                  <small className="text-muted">Keep track of your favorite artists and albums</small>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center">
                <i className="bi bi-people text-warning me-3" style={{fontSize: '1.5rem'}}></i>
                <div>
                  <h6 className="mb-1">Connect with Fans</h6>
                  <small className="text-muted">Join discussions and meet fellow music enthusiasts</small>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center">
                <i className="bi bi-calendar-event text-warning me-3" style={{fontSize: '1.5rem'}}></i>
                <div>
                  <h6 className="mb-1">Concert Meetups</h6>
                  <small className="text-muted">Find people to go to concerts with</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal 
        show={showAuthModal}
        onHide={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default LoginGate;
