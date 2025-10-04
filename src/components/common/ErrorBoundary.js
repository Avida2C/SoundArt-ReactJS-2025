import React from 'react';

/**
 * Error boundary component to catch JavaScript errors anywhere in the child component tree
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console or error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-danger">
                <div className="card-body text-center">
                  <div className="mb-4">
                    <i className="bi bi-exclamation-triangle text-danger" style={{fontSize: '4rem'}}></i>
                  </div>
                  <h2 className="card-title text-danger">Something went wrong</h2>
                  <p className="card-text">
                    We're sorry, but something unexpected happened. Please try refreshing the page.
                  </p>
                  <div className="d-flex gap-3 justify-content-center">
                    <button 
                      className="btn btn-warning"
                      onClick={() => window.location.reload()}
                    >
                      <i className="bi bi-arrow-clockwise me-2"></i>Refresh Page
                    </button>
                    <button 
                      className="btn btn-outline-secondary"
                      onClick={() => window.history.back()}
                    >
                      <i className="bi bi-arrow-left me-2"></i>Go Back
                    </button>
                  </div>
                  
                  {process.env.NODE_ENV === 'development' && this.state.error && (
                    <details className="mt-4 text-start">
                      <summary className="btn btn-outline-danger btn-sm">
                        Show Error Details
                      </summary>
                      <div className="mt-3">
                        <pre className="bg-light p-3 rounded text-danger small">
                          {this.state.error && this.state.error.toString()}
                          <br />
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    </details>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
