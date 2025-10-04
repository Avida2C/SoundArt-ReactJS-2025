import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from './AuthModal';

const ProtectedRoute = ({ children, fallback = null }) => {
  const { isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  React.useEffect(() => {
    if (!isAuthenticated && fallback === null) {
      setShowAuthModal(true);
    }
  }, [isAuthenticated, fallback]);

  if (isAuthenticated) {
    return children;
  }

  if (fallback) {
    return fallback;
  }

  return (
    <AuthModal 
      show={showAuthModal}
      onHide={() => setShowAuthModal(false)}
      onSuccess={() => setShowAuthModal(false)}
    />
  );
};

export default ProtectedRoute;
