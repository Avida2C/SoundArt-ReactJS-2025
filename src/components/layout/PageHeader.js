import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Page header component for consistent page headers
 * @param {object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.subtitle - Page subtitle
 * @param {Array} props.breadcrumbs - Breadcrumb items
 * @param {React.ReactNode} props.children - Additional content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - Page header component
 */
const PageHeader = ({ 
  title, 
  subtitle, 
  breadcrumbs = [], 
  children, 
  className = '' 
}) => {
  return (
    <section className={`py-5 ${className}`} style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
    }}>
      <div className="container text-white">
        <div className="row">
          <div className="col-12">
            {/* Breadcrumb */}
            {breadcrumbs.length > 0 && (
              <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                  {breadcrumbs.map((crumb, index) => (
                    <li 
                      key={index} 
                      className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
                    >
                      {crumb.href ? (
                        <Link to={crumb.href} className={index === breadcrumbs.length - 1 ? 'text-warning' : 'text-white-50'}>
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className={index === breadcrumbs.length - 1 ? 'text-warning' : 'text-white-50'}>
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-3">{title}</h1>
                {subtitle && (
                  <p className="lead mb-4">{subtitle}</p>
                )}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
