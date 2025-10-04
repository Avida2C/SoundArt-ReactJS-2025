import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { validateForm } from '../../utils/validation';

const LoginForm = ({ onSuccess, onSwitchToRegister }) => {
  const { login, isLoading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validationRules = {
    email: {
      required: 'Email is required',
      email: 'Please enter a valid email address'
    },
    password: {
      required: 'Password is required',
      minLength: 'Password must be at least 6 characters'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const { errors, isValid } = validateForm(formData, validationRules);
    
    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      onSuccess && onSuccess(result.user);
    }
  };

  return (
    <div className="card border-0 shadow-lg">
      <div className="card-body p-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-warning mb-2">
            <i className="bi bi-music-note-beamed me-2"></i>
            Welcome Back
          </h2>
          <p className="text-muted">Sign in to your SoundArt account</p>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            <i className="bi bi-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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

          <div className="mb-4">
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
                placeholder="Enter your password"
                disabled={isLoading}
              />
            </div>
            {formErrors.password && (
              <div className="invalid-feedback d-block">
                {formErrors.password}
              </div>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#" className="text-warning text-decoration-none">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 btn-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Signing In...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Sign In
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted">
            Don't have an account?{' '}
            <button
              type="button"
              className="btn btn-link text-warning p-0"
              onClick={onSwitchToRegister}
            >
              Sign up here
            </button>
          </p>
        </div>

        <div className="text-center mt-3">
          <small className="text-muted">
            Demo credentials: demo@example.com / demo123
          </small>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
