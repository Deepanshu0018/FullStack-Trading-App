import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 14,
        },
      },
    },
    title: {
      display: true,
      text: "Holdings Overview",
      font: {
        size: 20,
        weight: "bold",
      },
      color: "#0d6efd",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `₹ ${context.raw.toFixed(2)}`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return "₹" + value;
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 12,
        },
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 6,
      backgroundColor: function (context) {
        const value = context.raw;
        return value > 0 ? "rgba(13, 110, 253, 0.7)" : "rgba(220, 53, 69, 0.7)";
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div className="mt-5 p-3 shadow-sm bg-white rounded">
      <Bar options={options} data={data} />
    </div>
  );
}
