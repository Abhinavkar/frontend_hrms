import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar';
import '../layouts/Layout.css';

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <Navbar />
      {isLoggedIn && (
        <>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="hamburger-container">
            <button className="hamburger" onClick={toggleSidebar}>☰</button>
          </div>
        </>
      )}
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
