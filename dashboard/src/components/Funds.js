import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div
      className="container-fluid p-4"
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Top Actions */}
      <div
        className="d-flex flex-wrap align-items-center justify-content-start gap-2 mb-4 p-3 rounded-3 shadow"
        style={{ background: "#ffffff" }}
      >
        <p
          className="mb-0 me-3"
          style={{ fontSize: "0.95rem", color: "#495057" }}
        >
          Instant, zero-cost fund transfers with UPI
        </p>
        <Link
          to="#"
          className="btn btn-success"
          style={{
            padding: "6px 14px",
            borderRadius: "8px",
            fontSize: "0.9rem",
          }}
        >
          Add funds
        </Link>
        <Link
          to="#"
          className="btn btn-primary"
          style={{
            padding: "6px 14px",
            borderRadius: "8px",
            fontSize: "0.9rem",
          }}
        >
          Withdraw
        </Link>
      </div>

      {/* Equity & Commodity Sections */}
      <div className="row g-4">
        {/* Equity Column */}
        <div className="col-md-6">
          <div
            className="p-3 rounded-3 shadow"
            style={{
              background: "#ffffff",
              minHeight: "100%",
              border: "1px solid #dee2e6",
            }}
          >
            <h6
              className="fw-bold mb-3"
              style={{
                borderBottom: "1px solid #dee2e6",
                paddingBottom: "6px",
              }}
            >
              Equity
            </h6>
            <div className="d-flex justify-content-between mb-2">
              <p className="mb-0 text-muted">Available margin</p>
              <p className="mb-0 fw-semibold text-success">4,043.10</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="mb-0 text-muted">Used margin</p>
              <p className="mb-0 fw-semibold text-danger">3,757.30</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="mb-0 text-muted">Available cash</p>
              <p className="mb-0 fw-semibold text-success">4,043.10</p>
            </div>
            <hr />
            {[
              { label: "Opening Balance", value: "4,043.10" },
              { label: "Opening Balance", value: "3,736.40" },
              { label: "Payin", value: "4,064.00" },
              { label: "SPAN", value: "0.00" },
              { label: "Delivery margin", value: "0.00" },
              { label: "Exposure", value: "0.00" },
              { label: "Options premium", value: "0.00" },
            ].map((item, idx) => (
              <div key={idx} className="d-flex justify-content-between mb-2">
                <p className="mb-0 text-muted">{item.label}</p>
                <p className="mb-0 fw-semibold">{item.value}</p>
              </div>
            ))}
            <hr />
            {[
              { label: "Collateral (Liquid funds)", value: "0.00" },
              { label: "Collateral (Equity)", value: "0.00" },
              { label: "Total Collateral", value: "0.00" },
            ].map((item, idx) => (
              <div key={idx} className="d-flex justify-content-between mb-2">
                <p className="mb-0 text-muted">{item.label}</p>
                <p className="mb-0 fw-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commodity Column */}
        <div className="col-md-6">
          <div
            className="p-4 rounded-3 shadow d-flex flex-column align-items-center justify-content-center"
            style={{
              background: "#ffffff",
              minHeight: "100%",
              border: "1px solid #dee2e6",
            }}
          >
            <p
              className="text-muted mb-3"
              style={{ fontSize: "0.95rem", textAlign: "center" }}
            >
              You don't have a commodity account
            </p>
            <Link
              to="#"
              className="btn btn-primary"
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "0.9rem",
              }}
            >
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
