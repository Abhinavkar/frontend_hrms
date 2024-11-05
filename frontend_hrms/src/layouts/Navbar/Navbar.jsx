import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulating a login status check (you can replace this with real authentication logic)
  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming token is used for authentication
    if (token) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  const handleLogout = () => {
    // Implement logout logic
    localStorage.removeItem("token"); // Remove token on logout
    setIsLoggedIn(false); // Update the state to reflect logout
  };

  return (
    <nav className="navbar">
      <div className="logo">
        HRMS
      </div>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li><a href="./projects">Projects</a></li>
            <li><a href="./employee-management">Employee Management</a></li>
            <li><a href="#" onClick={handleLogout}>Logout</a></li>
          </>
        ) : (
          <>
            <li><a href="./login">Login</a></li>
            <li><a href="./register">Register</a></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
