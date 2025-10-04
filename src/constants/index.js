// Application Constants
export const APP_CONFIG = {
  name: 'SoundArt',
  tagline: 'Discover the legends of music',
  description: 'Explore rare stories and dive deep into the world of iconic artists and bands that shaped generations.',
  version: '1.0.0',
  author: 'SoundArt Team'
};

// API Endpoints
export const API_ENDPOINTS = {
  articles: '/api/articles',
  artists: '/api/artists',
  concerts: '/api/concerts',
  contact: '/api/contact'
};

// Route Paths
export const ROUTES = {
  home: '/',
  artists: '/artists',
  artist: '/artist/:id',
  news: '/news',
  article: '/article/:id',
  concerts: '/concerts',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
  notFound: '/404'
};

// UI Constants
export const UI_CONSTANTS = {
  colors: {
    primary: '#ffc107',
    secondary: '#6c757d',
    success: '#198754',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#0dcaf0',
    light: '#f8f9fa',
    dark: '#212529'
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem',
    xxl: '4rem'
  }
};

// Content Constants
export const CONTENT = {
  hero: {
    title: 'Welcome to SoundArt',
    subtitle: 'Discover the legends of music, explore rare stories, and dive deep into the world of iconic artists and bands that shaped generations.',
    cta: {
      primary: 'Explore Artists',
      secondary: 'Latest News'
    }
  },
  sections: {
    news: {
      title: 'Latest Stories',
      subtitle: 'Discover fascinating stories from the world of music legends'
    },
    artists: {
      title: 'Legendary Artists',
      subtitle: 'Explore the icons who defined music history'
    },
    concerts: {
      title: 'Live Concerts',
      subtitle: 'Experience the magic of legendary artists in spectacular tribute concerts'
    }
  },
  stats: {
    artists: '50+',
    stories: '100+',
    photos: '1000+',
    discovery: '24/7'
  }
};

// Form Validation
export const VALIDATION = {
  email: {
    required: 'Email is required',
    invalid: 'Please enter a valid email address'
  },
  name: {
    required: 'Name is required',
    minLength: 'Name must be at least 2 characters'
  },
  message: {
    required: 'Message is required',
    minLength: 'Message must be at least 10 characters'
  }
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/soundart',
  twitter: 'https://twitter.com/soundart',
  instagram: 'https://instagram.com/soundart',
  youtube: 'https://youtube.com/soundart'
};

// Image Placeholders
export const IMAGE_PLACEHOLDERS = {
  artist: '/images/placeholder-artist.jpg',
  article: '/images/placeholder-article.jpg',
  concert: '/images/placeholder-concert.jpg',
  avatar: '/images/placeholder-avatar.jpg'
};

// Loading States
export const LOADING_STATES = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error'
};

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection.',
  notFound: 'The requested resource was not found.',
  serverError: 'Server error. Please try again later.',
  unauthorized: 'You are not authorized to access this resource.',
  generic: 'Something went wrong. Please try again.'
};
