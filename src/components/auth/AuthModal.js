import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = ({ show, onHide, onSuccess, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);

  const handleSuccess = (user) => {
    onSuccess && onSuccess(user);
    onHide();
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="row g-0">
              <div className="col-lg-6 d-none d-lg-block">
                <div 
                  className="h-100 d-flex align-items-center justify-content-center text-white"
                  style={{
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                    minHeight: '500px'
                  }}
                >
                  <div className="text-center p-4">
                    <i className="bi bi-music-note-beamed text-warning mb-3" style={{fontSize: '4rem'}}></i>
                    <h3 className="fw-bold mb-3">
                      Welcome to <span className="text-warning">SoundArt</span>
                    </h3>
                    <p className="lead mb-4">
                      Join our community of music lovers and discover your next favorite artist
                    </p>
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
              </div>
              <div className="col-lg-6">
                <div className="p-4">
                  <button
                    type="button"
                    className="btn-close float-end"
                    onClick={onHide}
                    aria-label="Close"
                  ></button>
                  
                  {mode === 'login' ? (
                    <LoginForm 
                      onSuccess={handleSuccess}
                      onSwitchToRegister={switchMode}
                    />
                  ) : (
                    <RegisterForm 
                      onSuccess={handleSuccess}
                      onSwitchToLogin={switchMode}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;