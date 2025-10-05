import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_URL}/signup`,
        { username, password },
        { withCredentials: true }
      );
      setMessage(res.data.message || "Signup successful!");
      navigate("/login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed!");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_URL}/login`,
        { username, password },
        { withCredentials: true }
      );
      setMessage(res.data.message || "Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Signup / Login</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handleSignup}>
              Signup
            </button>
            <button className="btn btn-success" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>

        {message && (
          <div className="alert alert-info mt-3 text-center">{message}</div>
        )}
      </div>
    </div>
  );
}
