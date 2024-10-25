
import React from "react";
import "./home.css";

import { Link } from "react-router-dom";

const home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the Homepage</h1>
      <p>This is the main page of the application.</p>

      {/* Link to Login Page */}
      <Link to="/login" style={{ color: "blue", textDecoration: "underline" }}>
        Go to Login
      </Link>
    </div>
  );
};

export default home;
