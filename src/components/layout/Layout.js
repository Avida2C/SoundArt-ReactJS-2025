import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import ErrorBoundary from '../common/ErrorBoundary';

/**
 * Main layout component that wraps all pages
 * @param {object} props - Component props
 * @returns {JSX.Element} - Layout component
 */
const Layout = () => {
  return (
    <ErrorBoundary>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
