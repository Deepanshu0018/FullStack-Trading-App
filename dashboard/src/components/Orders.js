import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card text-center p-5 shadow-lg"
        style={{ maxWidth: "400px" }}
      >
        <h3 className="mb-3">No Orders Yet</h3>
        <p className="mb-4">You haven't placed any orders today.</p>
        <Link to="/" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
