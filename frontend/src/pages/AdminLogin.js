import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {

    console.log("Login clicked");   // debug

    // Check empty fields
    if (!email || !password) {
      setMessage("Please enter email and password");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:5000/api/login",
        {
          email,
          password,
          role: "admin"
        }
      );

      console.log(res.data); // debug

      setMessage("Login successful");

      // Save token
      localStorage.setItem(
        "token",
        res.data.token
      );

      // Redirect
      navigate("/admin-dashboard");

    } catch (error) {

      console.log(error); // debug

      setMessage(
        error.response?.data?.message ||
        "Server error"
      );

    }

  };

  return (

    <div
      className="container mt-5"
      style={{ maxWidth: "400px" }}
    >

      <div className="card shadow p-4">

        <h2 className="text-center">
          Admin Login
        </h2>

        {/* MESSAGE DISPLAY */}
        {message && (
          <div className="alert alert-info mt-2">
            {message}
          </div>
        )}

        <input
          type="email"
          className="form-control mt-3"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="form-control mt-3"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="btn btn-danger mt-3 w-100"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default AdminLogin;