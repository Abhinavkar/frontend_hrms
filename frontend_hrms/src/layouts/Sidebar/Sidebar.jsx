import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <ul className="sidebar-links">
        <li><a href="./projects">Projects</a></li>
        <li><a href="./employee">Employee</a></li>
        <li><a href="./skills">Skills</a></li>
        <li><a href="./roles">Roles</a></li>
        <li><a href="./techstack">Techstack</a></li>
        <li><a href="./department">Department</a></li>

        <li><a href="./business-unit">BU</a></li>




        <li><a href="#" onClick={toggleSidebar}>Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
