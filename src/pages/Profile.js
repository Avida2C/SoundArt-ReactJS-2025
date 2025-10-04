import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { formatDate, formatNumber } from '../utils/helpers';

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user: currentUser, isAuthenticated } = useAuth();
  const [profileUser, setProfileUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

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

  // Mock user data - in real app, this would come from API
  const mockUsers = {
    'musiclover123': {
      id: 1,
      username: 'musiclover123',
      firstName: 'Alex',
      lastName: 'Johnson',
      email: 'alex@example.com',
      avatar: '/images/avatar1.jpg',
      reputation: 150,
      joinDate: '2023-01-15',
      bio: 'Passionate music lover and vinyl collector. Always on the hunt for rare records and discovering new artists.',
      location: 'New York, NY',
      website: 'https://alexmusicblog.com',
      favoriteGenres: ['Rock', 'Jazz', 'Blues', 'Classical'],
      favoriteArtists: ['The Beatles', 'Miles Davis', 'Led Zeppelin', 'Nina Simone'],
      publicWishlist: [
        {
          id: 1,
          title: 'Dark Side of the Moon',
          artist: 'Pink Floyd',
          year: 1973,
          type: 'album',
          price: '$25.99',
          reason: 'Classic album I\'ve been wanting to add to my collection'
        },
        {
          id: 2,
          title: 'Kind of Blue (Vinyl)',
          artist: 'Miles Davis',
          year: 1959,
          type: 'album',
          price: '$45.99',
          reason: 'Looking for the original pressing'
        },
        {
          id: 3,
          title: 'Pink Floyd Concert',
          artist: 'Pink Floyd',
          date: '2024-06-15',
          venue: 'Madison Square Garden',
          type: 'concert',
          price: '$150',
          reason: 'Bucket list concert experience'
        }
      ],
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
        },
        {
          id: 4,
          title: 'Pastel Blues',
          artist: 'Nina Simone',
          year: 1965,
          cover: '/images/albums/pastel-blues.jpg',
          genre: 'Blues',
          rating: 4
        }
      ],
      stats: {
        posts: 24,
        replies: 156,
        likes: 89,
        followers: 45,
        following: 32
      },
      recentActivity: [
        {
          type: 'post',
          title: "What's your favorite Beatles album and why?",
          date: '2024-01-15T10:30:00Z',
          likes: 24,
          replies: 8
        },
        {
          type: 'reply',
          title: 'Replied to "Best guitar solos of all time"',
          date: '2024-01-14T15:20:00Z',
          likes: 5
        },
        {
          type: 'post',
          title: 'Vinyl vs Digital: My thoughts after 10 years',
          date: '2024-01-13T09:15:00Z',
          likes: 18,
          replies: 12
        }
      ]
    },
    'rockfan2024': {
      id: 2,
      username: 'rockfan2024',
      firstName: 'Sarah',
      lastName: 'Williams',
      email: 'sarah@example.com',
      avatar: '/images/avatar2.jpg',
      reputation: 95,
      joinDate: '2023-03-22',
      bio: 'Rock music enthusiast and concert photographer. Love capturing the energy of live performances.',
      location: 'Los Angeles, CA',
      website: 'https://sarahrockphotos.com',
      favoriteGenres: ['Rock', 'Metal', 'Alternative'],
      favoriteArtists: ['Queen', 'Metallica', 'Nirvana', 'Foo Fighters'],
      favoriteAlbums: [
        {
          id: 5,
          title: 'A Night at the Opera',
          artist: 'Queen',
          year: 1975,
          cover: '/images/albums/night-at-opera.jpg',
          genre: 'Rock',
          rating: 5
        },
        {
          id: 6,
          title: 'Master of Puppets',
          artist: 'Metallica',
          year: 1986,
          cover: '/images/albums/master-of-puppets.jpg',
          genre: 'Metal',
          rating: 5
        },
        {
          id: 7,
          title: 'Nevermind',
          artist: 'Nirvana',
          year: 1991,
          cover: '/images/albums/nevermind.jpg',
          genre: 'Alternative',
          rating: 5
        }
      ],
      stats: {
        posts: 12,
        replies: 89,
        likes: 67,
        followers: 28,
        following: 45
      },
      recentActivity: [
        {
          type: 'post',
          title: 'Concert photography tips for beginners',
          date: '2024-01-14T14:30:00Z',
          likes: 15,
          replies: 6
        },
        {
          type: 'reply',
          title: 'Replied to "What\'s your favorite Beatles album and why?"',
          date: '2024-01-15T10:35:00Z',
          likes: 3
        }
      ]
    },
    'mikedavis': {
      id: 3,
      username: 'mikedavis',
      firstName: 'Mike',
      lastName: 'Davis',
      email: 'mike@example.com',
      avatar: '/images/avatar3.jpg',
      reputation: 180,
      joinDate: '2023-02-10',
      bio: 'Guitar enthusiast and music producer. Love exploring different genres and sharing my musical journey.',
      location: 'Chicago, IL',
      website: 'https://mikedavismusic.com',
      favoriteGenres: ['Rock', 'Blues', 'Jazz', 'Funk'],
      favoriteArtists: ['Jimi Hendrix', 'Stevie Ray Vaughan', 'BB King', 'John Mayer'],
      stats: {
        posts: 18,
        replies: 124,
        likes: 95,
        followers: 67,
        following: 23
      },
      recentActivity: [
        {
          type: 'post',
          title: 'Best guitar solos of all time - my top 10',
          date: '2024-01-12T16:45:00Z',
          likes: 31,
          replies: 15
        },
        {
          type: 'reply',
          title: 'Replied to "Vinyl vs Digital debate"',
          date: '2024-01-13T11:20:00Z',
          likes: 8
        }
      ]
    },
    'emmawilson': {
      id: 4,
      username: 'emmawilson',
      firstName: 'Emma',
      lastName: 'Wilson',
      email: 'emma@example.com',
      avatar: '/images/avatar4.jpg',
      reputation: 120,
      joinDate: '2023-04-05',
      bio: 'Indie music lover and vinyl collector. Always discovering new artists and sharing hidden gems.',
      location: 'Portland, OR',
      website: 'https://emmawilsonmusic.com',
      favoriteGenres: ['Indie', 'Alternative', 'Folk', 'Electronic'],
      favoriteArtists: ['Radiohead', 'Arcade Fire', 'Bon Iver', 'Tame Impala'],
      stats: {
        posts: 15,
        replies: 98,
        likes: 76,
        followers: 52,
        following: 38
      },
      recentActivity: [
        {
          type: 'post',
          title: 'Hidden indie gems you need to hear',
          date: '2024-01-11T13:30:00Z',
          likes: 22,
          replies: 9
        },
        {
          type: 'reply',
          title: 'Replied to "Concert photography tips"',
          date: '2024-01-14T15:45:00Z',
          likes: 4
        }
      ]
    },
    'rachelgreen': {
      id: 5,
      username: 'rachelgreen',
      firstName: 'Rachel',
      lastName: 'Green',
      email: 'rachel@example.com',
      avatar: '/images/avatar9.jpg',
      reputation: 220,
      joinDate: '2022-11-08',
      bio: 'Music journalist and vinyl enthusiast. Love writing about emerging artists and music culture.',
      location: 'Austin, TX',
      website: 'https://rachelgreenmusic.com',
      favoriteGenres: ['Alternative', 'Indie Rock', 'Post-Punk', 'Shoegaze'],
      favoriteArtists: ['The Cure', 'My Bloody Valentine', 'Interpol', 'Beach House'],
      stats: {
        posts: 32,
        replies: 189,
        likes: 156,
        followers: 89,
        following: 45
      },
      recentActivity: [
        {
          type: 'post',
          title: 'The evolution of shoegaze: from My Bloody Valentine to today',
          date: '2024-01-10T14:20:00Z',
          likes: 45,
          replies: 18
        },
        {
          type: 'reply',
          title: 'Replied to "Best guitar solos of all time"',
          date: '2024-01-12T17:30:00Z',
          likes: 12
        }
      ]
    },
    'tomwilson': {
      id: 6,
      username: 'tomwilson',
      firstName: 'Tom',
      lastName: 'Wilson',
      email: 'tom@example.com',
      avatar: '/images/avatar4.jpg',
      reputation: 200,
      joinDate: '2022-12-15',
      bio: 'Classic rock aficionado and concert photographer. Documenting the live music scene for over a decade.',
      location: 'Nashville, TN',
      website: 'https://tomwilsonphotos.com',
      favoriteGenres: ['Classic Rock', 'Blues Rock', 'Southern Rock', 'Country Rock'],
      favoriteArtists: ['Led Zeppelin', 'The Allman Brothers Band', 'Lynyrd Skynyrd', 'The Eagles'],
      stats: {
        posts: 28,
        replies: 167,
        likes: 134,
        followers: 76,
        following: 52
      },
      recentActivity: [
        {
          type: 'post',
          title: 'Behind the scenes: photographing legendary rock concerts',
          date: '2024-01-09T11:15:00Z',
          likes: 38,
          replies: 14
        },
        {
          type: 'reply',
          title: 'Replied to "Vinyl vs Digital debate"',
          date: '2024-01-13T09:45:00Z',
          likes: 7
        }
      ]
    }
  };

  useEffect(() => {
    // Simulate API call
    const fetchUserProfile = async () => {
      setIsLoading(true);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const user = mockUsers[username];
        if (user) {
          setProfileUser(user);
          // Check if current user is following this user
          setIsFollowing(false); // Mock - in real app, check from API
        } else {
          setProfileUser(null);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setProfileUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [username]);

  const handleFollow = async () => {
    if (!isAuthenticated) {
      // Redirect to login or show auth modal
      navigate('/social');
      return;
    }

    try {
      // In real app, this would make an API call
      setIsFollowing(!isFollowing);
      console.log(isFollowing ? 'Unfollowed' : 'Followed', username);
    } catch (error) {
      console.error('Error following/unfollowing user:', error);
    }
  };

  const handleMessage = () => {
    if (!isAuthenticated) {
      navigate('/social');
      return;
    }
    // In real app, this would open a messaging interface
    console.log('Opening message to', username);
  };

  if (isLoading) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading profile...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!profileUser) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center">
              <i className="bi bi-person-x text-muted" style={{fontSize: '4rem'}}></i>
              <h2 className="mt-3 text-muted">User Not Found</h2>
              <p className="text-muted">The user you're looking for doesn't exist or has been removed.</p>
              <button className="btn btn-warning" onClick={() => navigate('/social')}>
                <i className="bi bi-arrow-left me-2"></i>Back to Community
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isOwnProfile = currentUser && currentUser.username === username;

  return (
    <div className="container py-5">
      {/* Profile Header */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-md-3 text-center">
                  <img
                    src={profileUser.avatar}
                    alt={profileUser.username}
                    className="rounded-circle mb-3"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <div className="d-flex justify-content-center gap-2">
                    {!isOwnProfile && isAuthenticated && (
                      <>
                        <button
                          className={`btn btn-sm ${isFollowing ? 'btn-outline-warning' : 'btn-warning'}`}
                          onClick={handleFollow}
                        >
                          <i className={`bi ${isFollowing ? 'bi-person-dash' : 'bi-person-plus'} me-1`}></i>
                          {isFollowing ? 'Following' : 'Follow'}
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={handleMessage}
                        >
                          <i className="bi bi-envelope me-1"></i>Message
                        </button>
                      </>
                    )}
                    {isOwnProfile && (
                      <button className="btn btn-sm btn-outline-warning">
                        <i className="bi bi-gear me-1"></i>Edit Profile
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h1 className="h2 mb-1">{profileUser.firstName} {profileUser.lastName}</h1>
                      <p className="text-muted mb-2">@{profileUser.username}</p>
                      <span className="badge bg-warning text-dark">
                        <i className="bi bi-star-fill me-1"></i>{profileUser.reputation} Reputation
                      </span>
                    </div>
                    <div className="text-end">
                      <small className="text-muted">
                        Member since {formatDate(profileUser.joinDate)}
                      </small>
                    </div>
                  </div>
                  
                  {profileUser.bio && (
                    <p className="mb-3">{profileUser.bio}</p>
                  )}
                  
                  <div className="row g-3">
                    {profileUser.location && (
                      <div className="col-md-6">
                        <small className="text-muted">
                          <i className="bi bi-geo-alt me-1"></i>{profileUser.location}
                        </small>
                      </div>
                    )}
                    {profileUser.website && (
                      <div className="col-md-6">
                        <small className="text-muted">
                          <i className="bi bi-globe me-1"></i>
                          <a href={profileUser.website} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            {profileUser.website}
                          </a>
                        </small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="row g-3 text-center">
                <div className="col-2">
                  <div className="h4 text-warning mb-1">{profileUser.stats.posts}</div>
                  <small className="text-muted">Posts</small>
                </div>
                <div className="col-2">
                  <div className="h4 text-warning mb-1">{profileUser.stats.replies}</div>
                  <small className="text-muted">Replies</small>
                </div>
                <div className="col-2">
                  <div className="h4 text-warning mb-1">{formatNumber(profileUser.stats.likes)}</div>
                  <small className="text-muted">Likes</small>
                </div>
                <div className="col-2">
                  <div className="h4 text-warning mb-1">{profileUser.stats.followers}</div>
                  <small className="text-muted">Followers</small>
                </div>
                <div className="col-2">
                  <div className="h4 text-warning mb-1">{profileUser.stats.following}</div>
                  <small className="text-muted">Following</small>
                </div>
                <div className="col-2">
                  <div className="h4 text-warning mb-1">{profileUser.reputation}</div>
                  <small className="text-muted">Reputation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Main Content */}
        <div className="col-lg-8">
          {/* Tabs */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-0">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'posts' ? 'active' : ''}`}
                    onClick={() => setActiveTab('posts')}
                  >
                    <i className="bi bi-chat-dots me-2"></i>Posts
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'activity' ? 'active' : ''}`}
                    onClick={() => setActiveTab('activity')}
                  >
                    <i className="bi bi-clock me-2"></i>Recent Activity
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
              </ul>
            </div>
            <div className="card-body">
              {activeTab === 'posts' && (
                <div>
                  <h5 className="mb-3">Recent Posts</h5>
                  {profileUser.recentActivity
                    .filter(activity => activity.type === 'post')
                    .map((post, index) => (
                      <div key={index} className="border-bottom pb-3 mb-3">
                        <h6 className="mb-2">
                          <a href="#" className="text-decoration-none text-dark">
                            {post.title}
                          </a>
                        </h6>
                        <div className="d-flex align-items-center gap-3 text-muted small">
                          <span>
                            <i className="bi bi-heart me-1"></i>{post.likes} likes
                          </span>
                          <span>
                            <i className="bi bi-chat-dots me-1"></i>{post.replies} replies
                          </span>
                          <span>
                            <i className="bi bi-clock me-1"></i>{getRelativeTime(post.date)}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {activeTab === 'activity' && (
                <div>
                  <h5 className="mb-3">Recent Activity</h5>
                  {profileUser.recentActivity.map((activity, index) => (
                    <div key={index} className="d-flex align-items-start mb-3">
                      <div className="flex-shrink-0 me-3">
                        <div className={`rounded-circle d-flex align-items-center justify-content-center ${activity.type === 'post' ? 'bg-warning' : 'bg-info'}`} style={{width: '40px', height: '40px'}}>
                          <i className={`bi ${activity.type === 'post' ? 'bi-chat-dots' : 'bi-reply'} text-white`}></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">
                          <a href="#" className="text-decoration-none text-dark">
                            {activity.title}
                          </a>
                        </h6>
                        <div className="d-flex align-items-center gap-3 text-muted small">
                          {activity.likes && (
                            <span>
                              <i className="bi bi-heart me-1"></i>{activity.likes} likes
                            </span>
                          )}
                          {activity.replies && (
                            <span>
                              <i className="bi bi-chat-dots me-1"></i>{activity.replies} replies
                            </span>
                          )}
                          <span>
                            <i className="bi bi-clock me-1"></i>{getRelativeTime(activity.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'favorites' && (
                <div>
                  <h5 className="mb-4">My Favorites</h5>
                  
                  {/* Favorite Albums */}
                  <div className="mb-5">
                    <h6 className="mb-3">
                      <i className="bi bi-vinyl me-2"></i>Favorite Albums
                    </h6>
                    <div className="row g-3">
                      {profileUser.favoriteAlbums?.map((album) => (
                        <div key={album.id} className="col-md-6">
                          <div className="card border-0 shadow-sm h-100">
                            <div className="row g-0">
                              <div className="col-4">
                                <div 
                                  className="h-100 d-flex align-items-center justify-content-center bg-light"
                                  style={{minHeight: '120px'}}
                                >
                                  <i className="bi bi-vinyl text-muted" style={{fontSize: '2rem'}}></i>
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
                                          style={{fontSize: '0.8rem'}}
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
                  <div className="mb-4">
                    <h6 className="mb-3">
                      <i className="bi bi-music-note-beamed me-2"></i>Favorite Artists
                    </h6>
                    <div className="row g-3">
                      {profileUser.favoriteArtists.map((artist, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                          <div className="card border-0 shadow-sm h-100">
                            <div className="card-body text-center p-3">
                              <div className="mb-2">
                                <i className="bi bi-person-circle text-warning" style={{fontSize: '2rem'}}></i>
                              </div>
                              <h6 className="card-title mb-1">{artist}</h6>
                              <button className="btn btn-sm btn-outline-warning">
                                <i className="bi bi-heart me-1"></i>Follow
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Favorite Genres */}
                  <div>
                    <h6 className="mb-3">
                      <i className="bi bi-tags me-2"></i>Favorite Genres
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {profileUser.favoriteGenres.map((genre, index) => (
                        <span key={index} className="badge bg-warning text-dark fs-6 px-3 py-2">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h5 className="mb-4">
                    <i className="bi bi-bookmark me-2"></i>Public Wishlist
                  </h5>
                  <p className="text-muted mb-4">Items {profileUser.firstName} wants to explore or purchase</p>
                  
                  <div className="row g-3">
                    {profileUser.publicWishlist?.map((item) => (
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
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <small className="text-muted">{item.year}</small>
                                    <span className="badge bg-success">{item.price}</span>
                                  </div>
                                ) : (
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <small className="text-muted">{item.venue}</small>
                                    <span className="badge bg-info">{item.price}</span>
                                  </div>
                                )}
                                <p className="text-muted small mb-3">{item.reason}</p>
                                <div className="d-flex gap-2">
                                  <button className="btn btn-sm btn-outline-warning">
                                    <i className="bi bi-gift me-1"></i>Gift
                                  </button>
                                  <button className="btn btn-sm btn-outline-info">
                                    <i className="bi bi-share me-1"></i>Share
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
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Quick Actions */}
          {!isOwnProfile && isAuthenticated && (
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-warning text-dark">
                <h6 className="mb-0">
                  <i className="bi bi-lightning me-2"></i>Quick Actions
                </h6>
              </div>
              <div className="card-body">
                <div className="d-grid gap-2">
                  <button
                    className={`btn ${isFollowing ? 'btn-outline-warning' : 'btn-warning'}`}
                    onClick={handleFollow}
                  >
                    <i className={`bi ${isFollowing ? 'bi-person-dash' : 'bi-person-plus'} me-2`}></i>
                    {isFollowing ? 'Unfollow' : 'Follow'} {profileUser.firstName}
                  </button>
                  <button className="btn btn-outline-secondary" onClick={handleMessage}>
                    <i className="bi bi-envelope me-2"></i>Send Message
                  </button>
                  <button className="btn btn-outline-info">
                    <i className="bi bi-share me-2"></i>Share Profile
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Music Preferences */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-warning text-dark">
              <h6 className="mb-0">
                <i className="bi bi-music-note-beamed me-2"></i>Music Taste
              </h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <h6 className="small fw-bold mb-2">Favorite Genres</h6>
                <div className="d-flex flex-wrap gap-1">
                  {profileUser.favoriteGenres.map((genre, index) => (
                    <span key={index} className="badge bg-warning text-dark small">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h6 className="small fw-bold mb-2">Top Artists</h6>
                <div className="d-flex flex-wrap gap-1">
                  {profileUser.favoriteArtists.map((artist, index) => (
                    <span key={index} className="badge bg-light text-dark border small">
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Similar Users */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-warning text-dark">
              <h6 className="mb-0">
                <i className="bi bi-people me-2"></i>Similar Music Lovers
              </h6>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="list-group-item border-0 px-0">
                  <div className="d-flex align-items-center">
                    <img src="/images/avatar3.jpg" alt="User" className="rounded-circle me-2" style={{width: '30px', height: '30px', objectFit: 'cover'}} />
                    <div className="flex-grow-1">
                      <div 
                        className="fw-semibold small text-primary" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/profile/mikedavis')}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                      >
                        Mike Davis
                      </div>
                      <small 
                        className="text-muted" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/profile/mikedavis')}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                      >
                        @mikedavis
                      </small>
                    </div>
                    <button className="btn btn-sm btn-outline-warning">Follow</button>
                  </div>
                </div>
                <div className="list-group-item border-0 px-0">
                  <div className="d-flex align-items-center">
                    <img src="/images/avatar4.jpg" alt="User" className="rounded-circle me-2" style={{width: '30px', height: '30px', objectFit: 'cover'}} />
                    <div className="flex-grow-1">
                      <div 
                        className="fw-semibold small text-primary" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/profile/emmawilson')}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                      >
                        Emma Wilson
                      </div>
                      <small 
                        className="text-muted" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/profile/emmawilson')}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                      >
                        @emmawilson
                      </small>
                    </div>
                    <button className="btn btn-sm btn-outline-warning">Follow</button>
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

export default Profile;
