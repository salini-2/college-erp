import React, { useState } from "react";

function FacultyLogin() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  return (

    <div
      className="container mt-5"
      style={{ maxWidth: "400px" }}
    >

      <div className="card shadow p-4">

        <h2 className="text-center">
          Admin Login
        </h2>

        <input
          type="email"
          className="form-control mt-3"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="form-control mt-3"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="btn btn-danger mt-3 w-100"
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default FacultyLogin;