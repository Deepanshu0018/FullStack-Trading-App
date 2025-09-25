import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className="watchlist-container p-3"
      style={{
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Search Bar */}
      <div className="d-flex align-items-center mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="form-control"
          style={{
            maxWidth: "400px",
            borderRadius: "8px",
            padding: "6px 12px",
          }}
        />
        <span
          className="ms-2 badge bg-primary"
          style={{ fontSize: "0.9rem", padding: "5px 10px" }}
        >
          {watchlist.length} / 50
        </span>
      </div>

      {/* List */}
      <ul className="list-unstyled">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      {/* Chart */}
      <div className="mt-4">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="d-flex justify-content-between align-items-center p-2 border-bottom"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
      style={{
        transition: "background 0.2s",
        cursor: "pointer",
        borderRadius: "6px",
      }}
    >
      <div className="item d-flex flex-column">
        <p
          className={`fw-bold mb-1 ${
            stock.isDown ? "text-danger" : "text-success"
          }`}
          style={{ fontSize: "0.95rem" }}
        >
          {stock.name}
        </p>
        <div className="itemInfo d-flex align-items-center">
          <span className="me-2 small text-muted">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown
              className="text-danger"
              style={{ fontSize: "1rem" }}
            />
          ) : (
            <KeyboardArrowUp
              className="text-success"
              style={{ fontSize: "1rem" }}
            />
          )}
          <span className="ms-2 fw-semibold">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="d-flex gap-2">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="btn btn-sm btn-success"
          onClick={handleBuyClick}
          style={{ minWidth: "60px", padding: "3px 8px" }}
        >
          Buy
        </button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="btn btn-sm btn-danger"
          style={{ minWidth: "60px", padding: "3px 8px" }}
        >
          Sell
        </button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="btn btn-sm btn-outline-primary"
          style={{ padding: "3px 6px" }}
        >
          <BarChartOutlined fontSize="small" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="btn btn-sm btn-outline-secondary"
          style={{ padding: "3px 6px" }}
        >
          <MoreHoriz fontSize="small" />
        </button>
      </Tooltip>
    </span>
  );
};
