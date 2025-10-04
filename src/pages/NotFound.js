import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-5 fw-bold mb-3">Page Not Found</h1>
      <p className="text-muted mb-4">The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn btn-warning">Go Home</Link>
    </div>
  );
}


