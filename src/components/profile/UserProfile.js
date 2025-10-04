import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { formatDate } from '../../utils/helpers';
import { formatNumber } from '../../utils/helpers';

const UserProfile = ({ userId, isOwnProfile = false }) => {
  const { user, followUser, unfollowUser, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data - in real app, this would come from API
  const profileUser = isOwnProfile ? {
    ...user,
    favoriteAlbums: [
      {
        id: 1,
        title: 'Abbey Road',
        artist: 'The Beatles',
        year: 1969,
        cover: '/images/albums/abbey-road.jpg',
        genre: 'Rock',
        rating: 5
      },
      {
        id: 2,
        title: 'Kind of Blue',
        artist: 'Miles Davis',
        year: 1959,
        cover: '/images/albums/kind-of-blue.jpg',
        genre: 'Jazz',
        rating: 5
      },
      {
        id: 3,
        title: 'Led Zeppelin IV',
        artist: 'Led Zeppelin',
        year: 1971,
        cover: '/images/albums/led-zeppelin-iv.jpg',
        genre: 'Rock',
        rating: 5
      }
    ],
    favoriteArtists: [
      {
        id: 1,
        name: 'The Beatles',
        genre: 'Rock',
        followers: '2.5M',
        avatar: '/images/artists/beatles.jpg'
      },
      {
        id: 2,
        name: 'Miles Davis',
        genre: 'Jazz',
        followers: '1.2M',
        avatar: '/images/artists/miles-davis.jpg'
      },
      {
        id: 3,
        name: 'Led Zeppelin',
        genre: 'Rock',
        followers: '3.1M',
        avatar: '/images/artists/led-zeppelin.jpg'
      }
    ],
    wishlist: [
      {
        id: 1,
        title: 'Dark Side of the Moon',
        artist: 'Pink Floyd',
        year: 1973,
        type: 'album',
        price: '$25.99'
      },
      {
        id: 2,
        title: 'Thriller',
        artist: 'Michael Jackson',
        year: 1982,
        type: 'album',
        price: '$22.99'
      },
      {
        id: 3,
        title: 'Pink Floyd Concert',
        artist: 'Pink Floyd',
        date: '2024-06-15',
        venue: 'Madison Square Garden',
        type: 'concert',
        price: '$150'
      }
    ],
    recentActivity: [
      {
        id: 1,
        type: 'like',
        title: 'Liked "Bohemian Rhapsody" by Queen',
        description: 'Added to your favorites',
        timestamp: '2 hours ago',
        icon: 'bi-heart-fill',
        color: 'text-danger'
      },
      {
        id: 2,
        type: 'wishlist',
        title: 'Added "Abbey Road" to wishlist',
        description: 'Want to listen to this album',
        timestamp: '1 day ago',
        icon: 'bi-bookmark-fill',
        color: 'text-warning'
      },
      {
        id: 3,
        type: 'comment',
        title: 'Commented on "Best Beatles Album?"',
        description: 'Shared your thoughts in the forum',
        timestamp: '3 days ago',
        icon: 'bi-chat-dots',
        color: 'text-info'
      },
      {
        id: 4,
        type: 'follow',
        title: 'Started following Sarah Williams',
        description: 'Now following @rockfan2024',
        timestamp: '1 week ago',
        icon: 'bi-person-plus',
        color: 'text-success'
      }
    ]
  } : {
    id: 2,
    username: 'rockfan2024',
    firstName: 'Sarah',
    lastName: 'Williams',
    avatar: '/images/avatar2.jpg',
    bio: 'Metal head who loves discovering underground bands',
    joinDate: '2023-03-20',
    location: 'Los Angeles, CA',
    favoriteGenres: ['Metal', 'Heavy Metal', 'Thrash Metal'],
    favoriteArtists: [4, 5, 6],
    favoriteAlbums: [4, 5, 6],
    wishlist: [1, 2, 7],
    following: [1, 3],
    followers: [1, 3, 4],
    posts: 8,
    reputation: 95
  };

  if (!profileUser) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const isFollowing = user?.following?.includes(profileUser.id) || false;
  const canFollow = isAuthenticated && !isOwnProfile;

  const handleFollow = () => {
    if (isFollowing) {
      unfollowUser(profileUser.id);
    } else {
      followUser(profileUser.id);
    }
  };

  return (
    <div className="container py-5">
      {/* Profile Header */}
      <div className="row mb-5">
        <div className="col-lg-4">
          <div className="text-center">
            <div className="position-relative d-inline-block">
              <img
                src={profileUser.avatar}
                alt={profileUser.username}
                className="rounded-circle shadow-lg"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              {isOwnProfile && (
                <button className="btn btn-warning btn-sm position-absolute bottom-0 end-0 rounded-circle">
                  <i className="bi bi-camera"></i>
                </button>
              )}
            </div>
            <h2 className="mt-3 fw-bold">{profileUser.firstName} {profileUser.lastName}</h2>
            <p className="text-muted">@{profileUser.username}</p>
            
            {canFollow && (
              <button
                className={`btn ${isFollowing ? 'btn-outline-warning' : 'btn-warning'} btn-lg`}
                onClick={handleFollow}
              >
                <i className={`bi ${isFollowing ? 'bi-person-check' : 'bi-person-plus'} me-2`}></i>
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            )}
          </div>
        </div>
        
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="row g-4 mb-4">
                <div className="col-md-3 text-center">
                  <div className="h4 text-warning mb-1">{formatNumber(profileUser.followers?.length || 0)}</div>
                  <small className="text-muted">Followers</small>
                </div>
                <div className="col-md-3 text-center">
                  <div className="h4 text-warning mb-1">{formatNumber(profileUser.following?.length || 0)}</div>
                  <small className="text-muted">Following</small>
                </div>
                <div className="col-md-3 text-center">
                  <div className="h4 text-warning mb-1">{formatNumber(profileUser.posts || 0)}</div>
                  <small className="text-muted">Posts</small>
                </div>
                <div className="col-md-3 text-center">
                  <div className="h4 text-warning mb-1">{formatNumber(profileUser.reputation || 0)}</div>
                  <small className="text-muted">Reputation</small>
                </div>
              </div>
              
              <div className="mb-3">
                <h6 className="fw-bold mb-2">About</h6>
                <p className="text-muted">{profileUser.bio || 'No bio available'}</p>
              </div>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-calendar text-warning me-2"></i>
                    <div>
                      <small className="text-muted">Joined</small>
                      <div className="fw-semibold">{formatDate(profileUser.joinDate)}</div>
                    </div>
                  </div>
                </div>
                {profileUser.location && (
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-geo-alt text-warning me-2"></i>
                      <div>
                        <small className="text-muted">Location</small>
                        <div className="fw-semibold">{profileUser.location}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="row">
        <div className="col-12">
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <i className="bi bi-grid me-2"></i>Overview
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'favorites' ? 'active' : ''}`}
                onClick={() => setActiveTab('favorites')}
              >
                <i className="bi bi-heart me-2"></i>Favorites
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'wishlist' ? 'active' : ''}`}
                onClick={() => setActiveTab('wishlist')}
              >
                <i className="bi bi-bookmark me-2"></i>Wishlist
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'activity' ? 'active' : ''}`}
                onClick={() => setActiveTab('activity')}
              >
                <i className="bi bi-activity me-2"></i>Activity
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="card border-0 shadow-sm">
                    <div className="card-header bg-warning text-dark">
                      <h6 className="mb-0">
                        <i className="bi bi-music-note-beamed me-2"></i>Favorite Genres
                      </h6>
                    </div>
                    <div className="card-body">
                      {profileUser.favoriteGenres?.length > 0 ? (
                        <div className="d-flex flex-wrap gap-2">
                          {profileUser.favoriteGenres.map((genre, index) => (
                            <span key={index} className="badge bg-warning text-dark">
                              {genre}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted mb-0">No favorite genres yet</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="card border-0 shadow-sm">
                    <div className="card-header bg-warning text-dark">
                      <h6 className="mb-0">
                        <i className="bi bi-star me-2"></i>Recent Activity
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="list-group list-group-flush">
                        <div className="list-group-item border-0 px-0">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-heart-fill text-danger me-2"></i>
                            <div>
                              <small className="fw-semibold">Liked "Bohemian Rhapsody"</small>
                              <div className="text-muted small">2 hours ago</div>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item border-0 px-0">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-bookmark-fill text-warning me-2"></i>
                            <div>
                              <small className="fw-semibold">Added to wishlist</small>
                              <div className="text-muted small">1 day ago</div>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item border-0 px-0">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-chat-dots text-info me-2"></i>
                            <div>
                              <small className="fw-semibold">Commented on forum</small>
                              <div className="text-muted small">3 days ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div>
                <h4 className="mb-4">My Favorites</h4>
                
                {/* Favorite Albums */}
                <div className="mb-5">
                  <h6 className="mb-3">
                    <i className="bi bi-vinyl me-2"></i>Favorite Albums
                  </h6>
                  <div className="row g-3">
                    {profileUser.favoriteAlbums?.map((album) => (
                      <div key={album.id} className="col-md-6 col-lg-4">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="row g-0">
                            <div className="col-4">
                              <div 
                                className="h-100 d-flex align-items-center justify-content-center bg-light"
                                style={{minHeight: '100px'}}
                              >
                                <i className="bi bi-vinyl text-muted" style={{fontSize: '1.5rem'}}></i>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="card-body p-3">
                                <h6 className="card-title mb-1">{album.title}</h6>
                                <p className="card-text text-muted small mb-2">{album.artist}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                  <small className="text-muted">{album.year} • {album.genre}</small>
                                  <div className="d-flex">
                                    {[...Array(5)].map((_, i) => (
                                      <i 
                                        key={i} 
                                        className={`bi bi-star-fill ${i < album.rating ? 'text-warning' : 'text-muted'}`}
                                        style={{fontSize: '0.7rem'}}
                                      ></i>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Favorite Artists */}
                <div>
                  <h6 className="mb-3">
                    <i className="bi bi-music-note-beamed me-2"></i>Favorite Artists
                  </h6>
                  <div className="row g-3">
                    {profileUser.favoriteArtists?.map((artist) => (
                      <div key={artist.id} className="col-md-6 col-lg-4">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="bi bi-person-circle text-warning" style={{fontSize: '2rem'}}></i>
                            </div>
                            <h6 className="card-title mb-1">{artist.name}</h6>
                            <p className="text-muted small mb-2">{artist.genre}</p>
                            <small className="text-muted">{artist.followers} followers</small>
                            <div className="mt-2">
                              <button className="btn btn-sm btn-outline-warning">
                                <i className="bi bi-heart me-1"></i>Following
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h4 className="mb-4">My Wishlist</h4>
                <div className="row g-3">
                  {profileUser.wishlist?.map((item) => (
                    <div key={item.id} className="col-md-6 col-lg-4">
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-3">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 me-3">
                              <div className={`rounded-circle d-flex align-items-center justify-content-center ${item.type === 'album' ? 'bg-warning' : 'bg-info'}`} style={{width: '50px', height: '50px'}}>
                                <i className={`bi ${item.type === 'album' ? 'bi-vinyl' : 'bi-calendar-event'} text-white`}></i>
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="card-title mb-1">{item.title}</h6>
                              <p className="text-muted small mb-2">{item.artist}</p>
                              {item.type === 'album' ? (
                                <div className="d-flex justify-content-between align-items-center">
                                  <small className="text-muted">{item.year}</small>
                                  <span className="badge bg-success">{item.price}</span>
                                </div>
                              ) : (
                                <div className="d-flex justify-content-between align-items-center">
                                  <small className="text-muted">{item.venue}</small>
                                  <span className="badge bg-info">{item.price}</span>
                                </div>
                              )}
                              <div className="mt-2">
                                <button className="btn btn-sm btn-outline-warning me-2">
                                  <i className="bi bi-cart-plus me-1"></i>Buy Now
                                </button>
                                <button className="btn btn-sm btn-outline-danger">
                                  <i className="bi bi-x me-1"></i>Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div>
                <h4 className="mb-4">Recent Activity</h4>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <div className="list-group list-group-flush">
                      {profileUser.recentActivity?.map((activity) => (
                        <div key={activity.id} className="list-group-item border-0 px-0">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 me-3">
                              <i className={`bi ${activity.icon} ${activity.color}`}></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-1">{activity.title}</h6>
                              <p className="text-muted mb-1">{activity.description}</p>
                              <small className="text-muted">{activity.timestamp}</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
