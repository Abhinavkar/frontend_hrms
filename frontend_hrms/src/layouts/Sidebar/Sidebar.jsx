import React, { useState, useEffect } from 'react';
// import 'layouts/Navbar/Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2>GENERAL</h2>
        <ul className="sidebar-links">
          <li><a href="#home">🏠 Home</a></li>
          <li><a href="#wall">📢 My Wall</a></li>
          <li><a href="#attendance">🕒 My Attendance</a></li>
          <li><a href="#employee">👥 Employee</a></li>
          <li><a href="#referral">👤 Employee Referral</a></li>
          <li><a href="#phonebook">📱 Phonebook</a></li>
          <li><a href="#vvdn-care">💬 VVDN CARE</a></li>
        </ul>

        <h2>EXPENSE</h2>
        <ul className="sidebar-links">
          {/* Add expense-related links here if needed */}
        </ul>

        <h2>TMS</h2>
        <ul className="sidebar-links">
          <li><a href="#add-module">📂 Add Module</a></li>
          <li><a href="#add-need">📧 Add Need</a></li>
        </ul>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        ) : (
          <div className="auth-links">
            <a href="./login">Login</a>
            <a href="./register">Register</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
