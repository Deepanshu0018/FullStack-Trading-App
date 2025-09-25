import React from "react";

const Summary = () => {
  return (
    <div className="container-fluid">
      {/* Greeting */}
      <div className="mb-4">
        <h6 className="text-secondary fw-light">Hi, User!</h6>
        <hr style={{ borderTop: "1px solid #dee2e6" }} />
      </div>

      {/* Equity Section */}
      <div
        className="d-flex justify-content-between align-items-center p-3 mb-4 shadow-sm rounded-3"
        style={{ background: "#fff" }}
      >
        <div>
          <h3 className="text-primary fw-bold mb-1">3.74k</h3>
          <p className="text-muted mb-0">Margin available</p>
        </div>
        <div
          style={{ width: "1px", background: "#dee2e6", height: "50px" }}
        ></div>
        <div>
          <p className="mb-1">
            Margins used <span className="fw-semibold">0</span>
          </p>
          <p className="mb-0">
            Opening balance <span className="fw-semibold">3.74k</span>
          </p>
        </div>
      </div>

      {/* Holdings Section */}
      <div
        className="d-flex justify-content-between align-items-center p-3 shadow-sm rounded-3"
        style={{ background: "#fff" }}
      >
        <div>
          <h3 className="text-success fw-bold mb-1">
            1.55k <small className="fw-normal text-success">+5.20%</small>
          </h3>
          <p className="text-muted mb-0">P&amp;L</p>
        </div>
        <div
          style={{ width: "1px", background: "#dee2e6", height: "50px" }}
        ></div>
        <div>
          <p className="mb-1">
            Current Value <span className="fw-semibold">31.43k</span>
          </p>
          <p className="mb-0">
            Investment <span className="fw-semibold">29.88k</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
