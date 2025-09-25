import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Oops! Page not found</h2>
        <p className="text-muted mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
