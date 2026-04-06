import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FacultyLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {

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
          role: "faculty"
        }
      );

      setMessage("Login successful");

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/faculty-dashboard");

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        "Login failed"
      );

    }

  };

  return (

    <div className="container mt-5" style={{ maxWidth: "400px" }}>

      <div className="card shadow p-4">

        <h2 className="text-center">
          Faculty Login
        </h2>

        {message && (
          <div className="alert alert-info">
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
          className="btn btn-success mt-3 w-100"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default FacultyLogin;