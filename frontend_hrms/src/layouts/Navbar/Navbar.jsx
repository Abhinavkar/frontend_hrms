import React, { useState, useEffect } from 'react';
import './Navbar.css';


function Navbar() {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="sidebar-toggle">
        HRMS
      </div>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li><a href="#home">🏠 Home</a></li>
            <li><a href="./projects">Projects</a></li>
            <li><a href="./employee-management">Employee Management</a></li>
            <li><a href="#" onClick={handleLogout}>Logout</a></li>
          </>
        ) : (
          <div className="auth-links">
            <a href="./login">Login</a>
            <a href="./register">Register</a>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

