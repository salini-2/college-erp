import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../images/graduation.jpg";

function Home() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div style={{ textAlign: "center" }}>

        <h1
          style={{
            color: "white",
            marginBottom: "40px"
          }}
        >
          🎓 Smart College ERP System
    
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px"
          }}
        >

          <div className="card p-4" style={{ width: "250px" }}>
            <h3>Student</h3>
            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/student-login")}
            >
              Student Login
            </button>
          </div>

          <div className="card p-4" style={{ width: "250px" }}>
            <h3>Faculty</h3>
            <button
              className="btn btn-success mt-3"
              onClick={() => navigate("/faculty-login")}
            >
              Faculty Login
            </button>
          </div>

          <div className="card p-4" style={{ width: "250px" }}>
            <h3>Admin</h3>
            <button
              className="btn btn-danger mt-3"
              onClick={() => navigate("/admin-login")}
            >
              Admin Login
            </button>
          </div>

        </div>

      </div>

    </div>

  );

}

export default Home;