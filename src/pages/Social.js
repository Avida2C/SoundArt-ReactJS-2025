import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from '../components/auth';
import Forum from '../components/forum/Forum';
import UserProfile from '../components/profile/UserProfile';

const Social = () => {
  const { user, isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState('forum');

  if (!isAuthenticated) {
    return (
      <div>
        {/* Hero Section for Non-Authenticated Users */}
        <section className="py-5" style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
        }}>
          <div className="container text-white">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold mb-4">
                  Join the <span className="text-warning">Music Community</span>
                </h1>
                <p className="lead mb-4">
                  Connect with fellow music lovers, share your favorite artists, discover new music, 
                  and find people to go to concerts with. Join our vibrant community today!
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <button 
                    className="btn btn-warning btn-lg"
                    onClick={() => setShowAuthModal(true)}
                  >
                    <i className="bi bi-person-plus me-2"></i>Join Now
                  </button>
                  <button 
                    className="btn btn-outline-light btn-lg"
                    onClick={() => setShowAuthModal(true)}
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>Sign In
                  </button>
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
                    src="/images/community.jpg" 
                    alt="Music Community" 
                    className="img-fluid rounded-4 shadow-lg"
                    style={{maxHeight: '300px', objectFit: 'cover'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 className="display-5 fw-bold mb-3">Why Join SoundArt?</h2>
                <p className="lead text-muted">Discover all the amazing features our community offers</p>
              </div>
            </div>
            
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <i className="bi bi-chat-dots text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                    <h5 className="card-title">Music Forum</h5>
                    <p className="card-text text-muted">
                      Discuss your favorite artists, share album reviews, and connect with like-minded music fans.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <i className="bi bi-people text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                    <h5 className="card-title">Concert Meetups</h5>
                    <p className="card-text text-muted">
                      Find people to go to concerts with and make new friends who share your musical taste.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <i className="bi bi-heart text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                    <h5 className="card-title">Personal Collections</h5>
                    <p className="card-text text-muted">
                      Build your personal music collection with favorites, wishlists, and custom playlists.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <i className="bi bi-graph-up text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                    <h5 className="card-title">Music Discovery</h5>
                    <p className="card-text text-muted">
                      Discover new artists and albums based on your friends' recommendations and activity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <i className="bi bi-person-check text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                    <h5 className="card-title">Social Profiles</h5>
                    <p className="card-text text-muted">
                      Create a detailed profile showcasing your musical taste and connect with other users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <i className="bi bi-activity text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
                    <h5 className="card-title">Activity Feed</h5>
                    <p className="card-text text-muted">
                      Stay updated with your friends' music activities, new discoveries, and concert experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h3 className="fw-bold mb-3">Ready to Join Our Community?</h3>
            <p className="lead text-muted mb-4">
              Sign up now and start connecting with music lovers from around the world
            </p>
            <button 
              className="btn btn-warning btn-lg"
              onClick={() => setShowAuthModal(true)}
            >
              <i className="bi bi-person-plus me-2"></i>Get Started Free
            </button>
          </div>
        </section>

        <AuthModal 
          show={showAuthModal}
          onHide={() => setShowAuthModal(false)}
          onSuccess={() => setShowAuthModal(false)}
        />
      </div>
    );
  }

  // Authenticated User View
  return (
    <div>
      {/* Welcome Header */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-2">
                Welcome back, <span className="text-warning">{user.firstName}</span>!
              </h2>
              <p className="text-muted mb-0">Connect with your music community</p>
            </div>
            <div className="col-lg-4 text-end">
              <div className="d-flex align-items-center justify-content-end">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="rounded-circle me-3"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
                <div>
                  <div className="fw-semibold">{user.firstName} {user.lastName}</div>
                  <small className="text-muted">@{user.username}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-3 border-bottom">
        <div className="container">
          <ul className="nav nav-tabs border-0">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'forum' ? 'active' : ''}`}
                onClick={() => setActiveTab('forum')}
              >
                <i className="bi bi-chat-dots me-2"></i>Forum
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <i className="bi bi-person me-2"></i>My Profile
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'activity' ? 'active' : ''}`}
                onClick={() => setActiveTab('activity')}
              >
                <i className="bi bi-activity me-2"></i>Activity Feed
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'meetups' ? 'active' : ''}`}
                onClick={() => setActiveTab('meetups')}
              >
                <i className="bi bi-people me-2"></i>Concert Meetups
              </button>
            </li>
          </ul>
        </div>
      </section>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'forum' && <Forum />}
        {activeTab === 'profile' && <UserProfile isOwnProfile={true} />}
        {activeTab === 'activity' && (
          <div className="container py-5">
            <div className="text-center">
              <i className="bi bi-activity text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
              <h3>Activity Feed</h3>
              <p className="text-muted">Your friends' music activities will appear here</p>
            </div>
          </div>
        )}
        {activeTab === 'meetups' && (
          <div className="container py-5">
            <div className="text-center">
              <i className="bi bi-people text-warning mb-3 d-block" style={{fontSize: '3rem'}}></i>
              <h3>Concert Meetups</h3>
              <p className="text-muted">Find people to go to concerts with</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Social;
