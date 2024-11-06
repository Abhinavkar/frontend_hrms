import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
// import './Layout.css'; // Add styles for layout

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        {/* Place your main content here */}
        <h1>Welcome to HRMS</h1>
      </div>
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
    </div>
  );
}

export default Layout;
