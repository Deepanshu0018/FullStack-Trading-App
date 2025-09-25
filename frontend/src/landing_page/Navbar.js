import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // to track current route

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF", position: "relative" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/signup") ? "fw-bold text-primary" : ""
                }`}
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/about") ? "fw-bold text-primary" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/product") ? "fw-bold text-primary" : ""
                }`}
                to="/product"
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/pricing") ? "fw-bold text-primary" : ""
                }`}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/support") ? "fw-bold text-primary" : ""
                }`}
                to="/support"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Hidden credit */}
        <span
          style={{
            fontSize: "8px",
            position: "absolute",
            bottom: "2px",
            right: "5px",
            color: "#888",
            opacity: 0.6,
          }}
        >
          Made by Deepanshu Gupta
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
