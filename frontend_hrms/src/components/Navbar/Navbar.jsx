import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import StatsWidget from '../Dashboard/widgets/StatsWidget';
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
{/* Logo Container */}
<div className="logo-container">
        {/* <img src={logohrms} alt="HRMS Logo" className="logo" />
        <span>HRMS</span>  */}
      </div>     
       <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><a href="#home"> Home</a></li>
            <li><a href="/about"> About</a></li>
            <li><a href="./projects">Projects</a></li>
            <li><a href="./employee-management">Employee Management</a></li>
            <li><a href="/logout" onClick={handleLogout}>Logout</a></li>
          </>
        ) : (
          <div className="nav-links">
            <a href="./">Login</a>
            <a href="./register">Register</a>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

