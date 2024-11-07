import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ toggleSidebar }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clearCookies = () => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    clearCookies();
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">HRMS</div>
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
