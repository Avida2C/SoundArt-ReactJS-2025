import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ForumPost from './ForumPost';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import { useDebounce } from '../../hooks';
import { formatDate } from '../../utils/helpers';

const Forum = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedTag, setSelectedTag] = useState('');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Handle URL parameters for tag filtering
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('tag');
    if (tagParam) {
      setSelectedTag(decodeURIComponent(tagParam));
    }
  }, []);

  // Update URL when tag is selected
  useEffect(() => {
    const url = new URL(window.location);
    if (selectedTag) {
      url.searchParams.set('tag', selectedTag);
    } else {
      url.searchParams.delete('tag');
    }
    window.history.replaceState({}, '', url);
  }, [selectedTag]);

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

  // Enhanced forum data
  const forumPosts = [
    {
      id: 1,
      title: "What's your favorite Beatles album and why?",
      content: "I've been listening to The Beatles for years and I'm curious about everyone's favorite album. For me, it's Abbey Road - the medley on side 2 is just incredible! The way they seamlessly blend 'You Never Give Me Your Money' into 'Sun King' and then into 'Mean Mr. Mustard' is pure musical genius. What's your pick and why?",
      author: {
        id: 1,
        username: 'musiclover123',
        firstName: 'Alex',
        lastName: 'Johnson',
        avatar: '/images/avatar1.jpg',
        reputation: 150,
        joinDate: '2023-01-15'
      },
      category: 'Discussion',
      tags: ['Beatles', 'Albums', 'Classic Rock', 'Abbey Road'],
      likes: 24,
      views: 156,
      replies: [
        {
          id: 1,
          content: "I agree! Abbey Road is amazing. The way they blend all those songs together is pure genius. But I have to say, Sgt. Pepper's holds a special place in my heart - it was so revolutionary for its time!",
          author: {
            id: 2,
            username: 'rockfan2024',
            firstName: 'Sarah',
            lastName: 'Williams',
            avatar: '/images/avatar2.jpg',
            reputation: 95
          },
          createdAt: '2024-01-15T10:30:00Z',
          likes: 8
        },
        {
          id: 2,
          content: "Revolver for me! The experimentation on that album was incredible. 'Tomorrow Never Knows' still sounds like it's from the future!",
          author: {
            id: 4,
            username: 'vinylcollector',
            firstName: 'Tom',
            lastName: 'Wilson',
            avatar: '/images/avatar4.jpg',
            reputation: 200
          },
          createdAt: '2024-01-15T14:20:00Z',
          likes: 12
        }
      ],
      createdAt: '2024-01-15T09:00:00Z',
      isPinned: true,
      isLocked: false
    },
    {
      id: 2,
      title: "Concert meetup for Queen tribute show in NYC",
      content: "Anyone going to the Queen tribute show at Madison Square Garden next month? Would love to meet up with fellow fans before the show! We could grab dinner at a nearby restaurant and share our favorite Queen memories. I'm thinking of wearing my vintage Queen t-shirt from the 80s!",
      author: {
        id: 2,
        username: 'rockfan2024',
        firstName: 'Sarah',
        lastName: 'Williams',
        avatar: '/images/avatar2.jpg',
        reputation: 95,
        joinDate: '2023-03-20'
      },
      category: 'Meetup',
      tags: ['Queen', 'Concert', 'NYC', 'Meetup', 'Madison Square Garden'],
      likes: 12,
      views: 89,
      replies: [
        {
          id: 3,
          content: "I'll be there! Would love to meet up. I'm coming from Brooklyn - anyone else from the area?",
          author: {
            id: 5,
            username: 'brooklynrocker',
            firstName: 'Lisa',
            lastName: 'Chen',
            avatar: '/images/avatar5.jpg',
            reputation: 75
          },
          createdAt: '2024-01-14T16:45:00Z',
          likes: 3
        }
      ],
      createdAt: '2024-01-14T15:20:00Z',
      isPinned: false,
      isLocked: false
    },
    {
      id: 3,
      title: "New Metallica album thoughts?",
      content: "Just listened to the new Metallica album and I'm blown away! The production quality is incredible and the songs have that classic Metallica energy. The guitar work is phenomenal and James's vocals are as powerful as ever. What do you all think? Favorite track so far?",
      author: {
        id: 3,
        username: 'metalfan99',
        firstName: 'Mike',
        lastName: 'Davis',
        avatar: '/images/avatar3.jpg',
        reputation: 180,
        joinDate: '2023-02-10'
      },
      category: 'Review',
      tags: ['Metallica', 'New Album', 'Metal', 'Review'],
      likes: 18,
      views: 203,
      replies: [],
      createdAt: '2024-01-13T20:45:00Z',
      isPinned: false,
      isLocked: false
    },
    {
      id: 4,
      title: "Best guitar solos of all time - let's debate!",
      content: "I know this is a classic topic, but I want to hear your thoughts! For me, it's hard to beat David Gilmour's solo in 'Comfortably Numb' - the emotion in that solo is just incredible. But I also love Eddie Van Halen's work on 'Eruption' and Slash's solo in 'November Rain'. What are your picks?",
      author: {
        id: 6,
        username: 'guitarhero',
        firstName: 'Jake',
        lastName: 'Martinez',
        avatar: '/images/avatar6.jpg',
        reputation: 120,
        joinDate: '2023-04-05'
      },
      category: 'Discussion',
      tags: ['Guitar', 'Solos', 'Pink Floyd', 'Van Halen', 'Guns N Roses'],
      likes: 31,
      views: 287,
      replies: [
        {
          id: 4,
          content: "Great picks! I'd add Jimmy Page's solo in 'Stairway to Heaven' - it's a masterclass in building tension and release.",
          author: {
            id: 7,
            username: 'ledzeppfan',
            firstName: 'Emma',
            lastName: 'Thompson',
            avatar: '/images/avatar7.jpg',
            reputation: 160
          },
          createdAt: '2024-01-12T11:15:00Z',
          likes: 15
        }
      ],
      createdAt: '2024-01-12T10:30:00Z',
      isPinned: false,
      isLocked: false
    },
    {
      id: 5,
      title: "Concert photography tips for beginners",
      content: "I'm planning to bring my camera to some upcoming concerts and would love some tips from experienced concert photographers. What settings work best? How do you handle the lighting? Any venues that are particularly photographer-friendly?",
      author: {
        id: 8,
        username: 'concertphotog',
        firstName: 'David',
        lastName: 'Kim',
        avatar: '/images/avatar8.jpg',
        reputation: 85,
        joinDate: '2023-05-12'
      },
      category: 'Question',
      tags: ['Photography', 'Concerts', 'Tips', 'Camera'],
      likes: 9,
      views: 134,
      replies: [],
      createdAt: '2024-01-11T16:20:00Z',
      isPinned: false,
      isLocked: false
    },
    {
      id: 6,
      title: "Vinyl vs Digital - the eternal debate",
      content: "I know this has been discussed a million times, but I'm curious about the current consensus. I love the ritual of putting on a record, but digital is so convenient. What's your preference and why? Are there albums that you think sound significantly better on vinyl?",
      author: {
        id: 9,
        username: 'audiophile',
        firstName: 'Rachel',
        lastName: 'Green',
        avatar: '/images/avatar9.jpg',
        reputation: 220,
        joinDate: '2023-01-08'
      },
      category: 'Discussion',
      tags: ['Vinyl', 'Digital', 'Audio Quality', 'Music Format'],
      likes: 27,
      views: 198,
      replies: [],
      createdAt: '2024-01-10T14:45:00Z',
      isPinned: false,
      isLocked: false
    }
  ];

  const categories = ['all', 'Discussion', 'Meetup', 'Review', 'Question', 'News'];

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = forumPosts.filter(post => {
      const matchesSearch = debouncedSearchTerm === '' || 
        post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      const matchesTag = selectedTag === '' || post.tags.some(tag => 
        tag.toLowerCase() === selectedTag.toLowerCase()
      );
      
      return matchesSearch && matchesCategory && matchesTag;
    });

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'popular':
          return b.likes - a.likes;
        case 'most_replied':
          return (b.replies?.length || 0) - (a.replies?.length || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [debouncedSearchTerm, selectedCategory, sortBy, selectedTag]);

  const handleLike = (postId) => {
    // In real app, this would make an API call
    console.log('Liked post:', postId);
  };

  const handleReply = async (postId, replyText) => {
    // In real app, this would make an API call
    console.log('Replying to post:', postId, 'with:', replyText);
  };

  const handleShare = (post) => {
    // In real app, this would open share dialog
    console.log('Sharing post:', post);
  };

  const handleNewPost = async (postData) => {
    // In real app, this would make an API call
    console.log('Creating new post:', postData);
    // For demo purposes, we'll just close the form
    setShowNewPostForm(false);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackToForum = () => {
    setSelectedPost(null);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setSelectedPost(null); // Go back to forum view when filtering by tag
  };

  // If a post is selected, show the post detail view
  if (selectedPost) {
    return (
      <PostDetail
        post={selectedPost}
        onBack={handleBackToForum}
        onLike={handleLike}
        onReply={handleReply}
        onShare={handleShare}
        onTagClick={handleTagClick}
      />
    );
  }

  return (
    <div className="container py-5">
      {/* Forum Header */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="display-5 fw-bold mb-2">
                <i className="bi bi-chat-dots text-warning me-2"></i>
                Music Forum
              </h1>
              <p className="lead text-muted">Connect with fellow music lovers and share your thoughts</p>
            </div>
            {isAuthenticated && (
              <button
                className="btn btn-warning btn-lg"
                onClick={() => setShowNewPostForm(true)}
              >
                <i className="bi bi-plus-circle me-2"></i>
                New Post
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="row mb-4">
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="btn btn-outline-secondary"
                onClick={() => setSearchTerm('')}
              >
                <i className="bi bi-x"></i>
              </button>
            )}
          </div>
        </div>
        <div className="col-lg-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.slice(1).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="col-lg-3">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="most_replied">Most Replied</option>
          </select>
        </div>
        <div className="col-lg-2">
          <div className="text-end">
            <small className="text-muted">
              {filteredAndSortedPosts.length} posts
            </small>
          </div>
        </div>
      </div>

      {/* Forum Posts */}
      <div className="row">
        <div className="col-lg-8">
          {filteredAndSortedPosts.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-search text-muted mb-3 d-block" style={{fontSize: '3rem'}}></i>
              <h4 className="text-muted">No posts found</h4>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            filteredAndSortedPosts.map(post => (
              <ForumPost
                key={post.id}
                post={post}
                onLike={handleLike}
                onReply={handleReply}
                onShare={handleShare}
                onPostClick={handlePostClick}
                onTagClick={handleTagClick}
              />
            ))
          )}
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="sticky-top" style={{top: '2rem'}}>
            {/* Forum Stats */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-warning text-dark">
                <h6 className="mb-0">
                  <i className="bi bi-graph-up me-2"></i>Forum Stats
                </h6>
              </div>
              <div className="card-body">
                <div className="row g-3 text-center">
                  <div className="col-6">
                    <div className="h5 text-warning mb-1">{forumPosts.length}</div>
                    <small className="text-muted">Total Posts</small>
                  </div>
                  <div className="col-6">
                    <div className="h5 text-warning mb-1">
                      {forumPosts.reduce((sum, post) => sum + (post.replies?.length || 0), 0)}
                    </div>
                    <small className="text-muted">Total Replies</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-warning text-dark">
                <h6 className="mb-0">
                  <i className="bi bi-tags me-2"></i>Popular Tags
                </h6>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  {['Beatles', 'Queen', 'Metallica', 'Concert', 'Album', 'Rock', 'Metal', 'Guitar', 'Vinyl', 'Photography'].map(tag => (
                    <span 
                      key={tag} 
                      className={`badge ${selectedTag === tag ? 'bg-warning text-dark' : 'bg-light text-dark border'} ${selectedTag === tag ? '' : 'clickable-tag'}`}
                      style={{ cursor: selectedTag === tag ? 'default' : 'pointer' }}
                      onClick={() => selectedTag === tag ? setSelectedTag('') : setSelectedTag(tag)}
                      onMouseEnter={(e) => {
                        if (selectedTag !== tag) {
                          e.target.style.backgroundColor = '#e9ecef';
                          e.target.style.transform = 'scale(1.05)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedTag !== tag) {
                          e.target.style.backgroundColor = '';
                          e.target.style.transform = 'scale(1)';
                        }
                      }}
                    >
                      #{tag}
                      {selectedTag === tag && <i className="bi bi-x-circle ms-1"></i>}
                    </span>
                  ))}
                </div>
                {selectedTag && (
                  <div className="mt-3 p-2 bg-light rounded">
                    <small className="text-muted">
                      <i className="bi bi-funnel me-1"></i>
                      Filtering by: <strong className="text-primary">#{selectedTag}</strong>
                      <button 
                        className="btn btn-sm btn-outline-secondary ms-2"
                        onClick={() => setSelectedTag('')}
                      >
                        Clear
                      </button>
                    </small>
                  </div>
                )}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-warning text-dark">
                <h6 className="mb-0">
                  <i className="bi bi-trophy me-2"></i>Top Contributors
                </h6>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item border-0 px-0">
                    <div className="d-flex align-items-center">
                      <img src="/images/avatar9.jpg" alt="Rachel" className="rounded-circle me-2" style={{width: '30px', height: '30px', objectFit: 'cover'}} />
                      <div className="flex-grow-1">
                        <div 
                          className="fw-semibold text-primary" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate('/profile/rachelgreen')}
                          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                        >
                          Rachel Green
                        </div>
                        <small className="text-muted">220 reputation</small>
                      </div>
                      <span className="badge bg-warning text-dark">#1</span>
                    </div>
                  </div>
                  <div className="list-group-item border-0 px-0">
                    <div className="d-flex align-items-center">
                      <img src="/images/avatar4.jpg" alt="Tom" className="rounded-circle me-2" style={{width: '30px', height: '30px', objectFit: 'cover'}} />
                      <div className="flex-grow-1">
                        <div 
                          className="fw-semibold text-primary" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate('/profile/tomwilson')}
                          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                        >
                          Tom Wilson
                        </div>
                        <small className="text-muted">200 reputation</small>
                      </div>
                      <span className="badge bg-secondary">#2</span>
                    </div>
                  </div>
                  <div className="list-group-item border-0 px-0">
                    <div className="d-flex align-items-center">
                      <img src="/images/avatar3.jpg" alt="Mike" className="rounded-circle me-2" style={{width: '30px', height: '30px', objectFit: 'cover'}} />
                      <div className="flex-grow-1">
                        <div 
                          className="fw-semibold text-primary" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate('/profile/mikedavis')}
                          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                        >
                          Mike Davis
                        </div>
                        <small className="text-muted">180 reputation</small>
                      </div>
                      <span className="badge bg-warning text-dark">#3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Most Active Posts */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-warning text-dark">
                <h6 className="mb-0">
                  <i className="bi bi-fire me-2"></i>Most Active
                </h6>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  {forumPosts
                    .filter(post => post.replies && post.replies.length > 0)
                    .sort((a, b) => new Date(b.replies[b.replies.length - 1].createdAt) - new Date(a.replies[a.replies.length - 1].createdAt))
                    .slice(0, 3)
                    .map(post => (
                      <div key={post.id} className="list-group-item border-0 px-0">
                        <div className="d-flex align-items-start">
                          <div className="flex-grow-1">
                            <h6 className="mb-1 text-primary" style={{ cursor: 'pointer', fontSize: '0.9rem' }} onClick={() => handlePostClick(post)}>
                              {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
                            </h6>
                            <small className="text-muted">
                              <i className="bi bi-chat-dots me-1"></i>{post.replies.length} replies
                            </small>
                            <div className="text-muted small">
                              Last: {getRelativeTime(post.replies[post.replies.length - 1].createdAt)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-warning text-dark">
                <h6 className="mb-0">
                  <i className="bi bi-clock me-2"></i>Recent Activity
                </h6>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item border-0 px-0">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-chat-dots text-info me-2"></i>
                      <div>
                        <small className="fw-semibold">New post in Discussion</small>
                        <div className="text-muted small">2 hours ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item border-0 px-0">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-people text-success me-2"></i>
                      <div>
                        <small className="fw-semibold">New meetup posted</small>
                        <div className="text-muted small">5 hours ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item border-0 px-0">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-star text-warning me-2"></i>
                      <div>
                        <small className="fw-semibold">Album review posted</small>
                        <div className="text-muted small">1 day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Post Form Modal */}
      {showNewPostForm && (
        <NewPostForm
          onClose={() => setShowNewPostForm(false)}
          onSubmit={handleNewPost}
        />
      )}
    </div>
  );
};

export default Forum;
