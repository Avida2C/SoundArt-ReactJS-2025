import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks';
import { WelcomeModal } from '../components/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock user data for demo purposes
const mockUsers = [
  {
    id: 1,
    username: 'musiclover123',
    email: 'demo@example.com',
    password: 'demo123',
    firstName: 'Alex',
    lastName: 'Johnson',
    avatar: '/images/avatar1.jpg',
    bio: 'Passionate about classic rock and discovering new artists',
    joinDate: '2023-01-15',
    location: 'New York, NY',
    favoriteGenres: ['Rock', 'Classic Rock', 'Progressive Rock'],
    favoriteArtists: [1, 2, 7], // Beatles, Queen, Led Zeppelin
    favoriteAlbums: [1, 2, 3],
    wishlist: [4, 5, 6],
    following: [2, 3],
    followers: [2, 3, 4],
    posts: 12,
    reputation: 150
  },
  {
    id: 2,
    username: 'rockfan2024',
    email: 'rock@example.com',
    password: 'rock123',
    firstName: 'Sarah',
    lastName: 'Williams',
    avatar: '/images/avatar2.jpg',
    bio: 'Metal head who loves discovering underground bands',
    joinDate: '2023-03-20',
    location: 'Los Angeles, CA',
    favoriteGenres: ['Metal', 'Heavy Metal', 'Thrash Metal'],
    favoriteArtists: [4, 5, 6], // Metallica, AC/DC, Pink Floyd
    favoriteAlbums: [4, 5, 6],
    wishlist: [1, 2, 7],
    following: [1, 3],
    followers: [1, 3, 4],
    posts: 8,
    reputation: 95
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  // Simulate API delay
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await delay(1000); // Simulate API call
      
      const foundUser = mockUsers.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        setShowWelcomeModal(true);
        return { success: true, user: userWithoutPassword };
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await delay(1000); // Simulate API call
      
      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email === userData.email || u.username === userData.username);
      if (existingUser) {
        throw new Error('User with this email or username already exists');
      }
      
      // Create new user
      const newUser = {
        id: mockUsers.length + 1,
        ...userData,
        avatar: '/images/default-avatar.jpg',
        joinDate: new Date().toISOString().split('T')[0],
        favoriteGenres: [],
        favoriteArtists: [],
        favoriteAlbums: [],
        wishlist: [],
        following: [],
        followers: [],
        posts: 0,
        reputation: 0
      };
      
      // Add to mock users (in real app, this would be an API call)
      mockUsers.push(newUser);
      
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      setShowWelcomeModal(true);
      return { success: true, user: userWithoutPassword };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  const updateProfile = async (updates) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await delay(500); // Simulate API call
      
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      return { success: true, user: updatedUser };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  const addToFavorites = (type, itemId) => {
    if (!user) return { success: false, error: 'Not logged in' };
    
    const favoritesKey = `favorite${type}s`;
    const currentFavorites = user[favoritesKey] || [];
    
    if (currentFavorites.includes(itemId)) {
      return { success: false, error: 'Already in favorites' };
    }
    
    const updatedFavorites = [...currentFavorites, itemId];
    updateProfile({ [favoritesKey]: updatedFavorites });
    
    return { success: true };
  };

  const removeFromFavorites = (type, itemId) => {
    if (!user) return { success: false, error: 'Not logged in' };
    
    const favoritesKey = `favorite${type}s`;
    const currentFavorites = user[favoritesKey] || [];
    const updatedFavorites = currentFavorites.filter(id => id !== itemId);
    
    updateProfile({ [favoritesKey]: updatedFavorites });
    
    return { success: true };
  };

  const addToWishlist = (itemId) => {
    if (!user) return { success: false, error: 'Not logged in' };
    
    const currentWishlist = user.wishlist || [];
    
    if (currentWishlist.includes(itemId)) {
      return { success: false, error: 'Already in wishlist' };
    }
    
    const updatedWishlist = [...currentWishlist, itemId];
    updateProfile({ wishlist: updatedWishlist });
    
    return { success: true };
  };

  const removeFromWishlist = (itemId) => {
    if (!user) return { success: false, error: 'Not logged in' };
    
    const currentWishlist = user.wishlist || [];
    const updatedWishlist = currentWishlist.filter(id => id !== itemId);
    
    updateProfile({ wishlist: updatedWishlist });
    
    return { success: true };
  };

  const followUser = (userId) => {
    if (!user) return { success: false, error: 'Not logged in' };
    
    const currentFollowing = user.following || [];
    
    if (currentFollowing.includes(userId)) {
      return { success: false, error: 'Already following this user' };
    }
    
    const updatedFollowing = [...currentFollowing, userId];
    updateProfile({ following: updatedFollowing });
    
    return { success: true };
  };

  const unfollowUser = (userId) => {
    if (!user) return { success: false, error: 'Not logged in' };
    
    const currentFollowing = user.following || [];
    const updatedFollowing = currentFollowing.filter(id => id !== userId);
    
    updateProfile({ following: updatedFollowing });
    
    return { success: true };
  };

  const value = {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    updateProfile,
    addToFavorites,
    removeFromFavorites,
    addToWishlist,
    removeFromWishlist,
    followUser,
    unfollowUser,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      <WelcomeModal 
        show={showWelcomeModal}
        onHide={() => setShowWelcomeModal(false)}
        user={user}
      />
    </AuthContext.Provider>
  );
};
