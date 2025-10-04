import React from "react";
import {
  FaCalendarAlt,
  FaTasks,
  FaStickyNote,
  FaChartLine,
} from "react-icons/fa";

const Apps = () => {
  const apps = [
    {
      name: "Calendar",
      description: "Manage your schedule",
      icon: <FaCalendarAlt />,
    },
    { name: "Tasks", description: "Track your tasks", icon: <FaTasks /> },
    { name: "Notes", description: "Take quick notes", icon: <FaStickyNote /> },
    {
      name: "Analytics",
      description: "View data insights",
      icon: <FaChartLine />,
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Apps Dashboard</h2>
      <div className="row">
        {apps.map((app, index) => (
          <div className="col-sm-6 col-md-3 mb-4" key={index}>
            <div
              className="card shadow-sm h-100 text-center p-4 border-0 rounded-4"
              style={{ transition: "transform 0.2s", cursor: "pointer" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div
                className="mb-3"
                style={{ fontSize: "2.5rem", color: "#0d6efd" }}
              >
                {app.icon}
              </div>
              <h5 className="card-title">{app.name}</h5>
              <p className="card-text text-muted">{app.description}</p>
              <button className="btn btn-outline-primary btn-sm">Open</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
