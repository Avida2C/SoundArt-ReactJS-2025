import React from 'react';

/**
 * Loading spinner component
 * @param {object} props - Component props
 * @param {string} props.size - Size of the spinner (sm, md, lg)
 * @param {string} props.color - Color of the spinner
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.text - Loading text to display
 * @returns {JSX.Element} - Loading spinner component
 */
const LoadingSpinner = ({ 
  size = 'md', 
  color = 'warning', 
  className = '', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  };

  return (
    <div className={`d-flex flex-column align-items-center justify-content-center ${className}`}>
      <div 
        className={`spinner-border text-${color} ${sizeClasses[size]}`} 
        role="status"
        aria-label="Loading"
      >
        <span className="visually-hidden">{text}</span>
      </div>
      {text && (
        <div className="mt-2 text-muted">
          <small>{text}</small>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
