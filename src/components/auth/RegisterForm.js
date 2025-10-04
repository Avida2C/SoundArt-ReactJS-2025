import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { validateForm } from '../../utils/validation';

const RegisterForm = ({ onSuccess, onSwitchToLogin }) => {
  const { register, isLoading, error } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    location: '',
    favoriteGenres: []
  });
  const [formErrors, setFormErrors] = useState({});

  const genreOptions = [
    'Rock', 'Classic Rock', 'Progressive Rock', 'Hard Rock', 'Metal', 'Heavy Metal',
    'Thrash Metal', 'Grunge', 'Alternative Rock', 'Pop Rock', 'Blues Rock',
    'Folk Rock', 'Psychedelic Rock', 'Punk Rock', 'Indie Rock'
  ];

  const validationRules = {
    username: {
      required: 'Username is required',
      minLength: 'Username must be at least 3 characters'
    },
    email: {
      required: 'Email is required',
      email: 'Please enter a valid email address'
    },
    password: {
      required: 'Password is required',
      minLength: 'Password must be at least 6 characters'
    },
    confirmPassword: {
      required: 'Please confirm your password',
      custom: (value) => {
        if (value !== formData.password) {
          return 'Passwords do not match';
        }
        return null;
      }
    },
    firstName: {
      required: 'First name is required'
    },
    lastName: {
      required: 'Last name is required'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleGenreChange = (genre) => {
    setFormData(prev => ({
      ...prev,
      favoriteGenres: prev.favoriteGenres.includes(genre)
        ? prev.favoriteGenres.filter(g => g !== genre)
        : [...prev.favoriteGenres, genre]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const { errors, isValid } = validateForm(formData, validationRules);
    
    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    const { confirmPassword, ...userData } = formData;
    const result = await register(userData);
    
    if (result.success) {
      onSuccess && onSuccess(result.user);
    }
  };

  return (
    <div className="card border-0 shadow-lg">
      <div className="card-body p-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-warning mb-2">
            <i className="bi bi-person-plus me-2"></i>
            Join SoundArt
          </h2>
          <p className="text-muted">Create your account and start discovering music</p>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            <i className="bi bi-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                disabled={isLoading}
              />
              {formErrors.firstName && (
                <div className="invalid-feedback d-block">
                  {formErrors.firstName}
                </div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                disabled={isLoading}
              />
              {formErrors.lastName && (
                <div className="invalid-feedback d-block">
                  {formErrors.lastName}
                </div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input
                type="text"
                className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                disabled={isLoading}
              />
            </div>
            {formErrors.username && (
              <div className="invalid-feedback d-block">
                {formErrors.username}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>
            {formErrors.email && (
              <div className="invalid-feedback d-block">
                {formErrors.email}
              </div>
            )}
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  disabled={isLoading}
                />
              </div>
              {formErrors.password && (
                <div className="invalid-feedback d-block">
                  {formErrors.password}
                </div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock-fill"></i>
                </span>
                <input
                  type="password"
                  className={`form-control ${formErrors.confirmPassword ? 'is-invalid' : ''}`}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  disabled={isLoading}
                />
              </div>
              {formErrors.confirmPassword && (
                <div className="invalid-feedback d-block">
                  {formErrors.confirmPassword}
                </div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location (Optional)</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-geo-alt"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Country"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Favorite Genres (Optional)</label>
            <div className="row g-2">
              {genreOptions.map(genre => (
                <div key={genre} className="col-md-4 col-sm-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={genre}
                      checked={formData.favoriteGenres.includes(genre)}
                      onChange={() => handleGenreChange(genre)}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor={genre}>
                      {genre}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 btn-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Creating Account...
              </>
            ) : (
              <>
                <i className="bi bi-person-plus me-2"></i>
                Create Account
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted">
            Already have an account?{' '}
            <button
              type="button"
              className="btn btn-link text-warning p-0"
              onClick={onSwitchToLogin}
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
