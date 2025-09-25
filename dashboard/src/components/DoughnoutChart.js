import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  return (
    <div
      className="card shadow-sm p-3 mb-4"
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        borderRadius: "12px",
        background: "#fff",
      }}
    >
      <h5 className="text-center mb-3">Watchlist Overview</h5>
      <div style={{ height: "300px" }}>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  font: { size: 12 },
                  color: "#333",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
