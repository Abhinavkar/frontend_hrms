import React from 'react';
import '../Sidebar/Sidebar.css';
import { useLocation } from 'react-router-dom';

import logohrms from '../../assets/logohrms.png';
// function Sidebar({ isOpen, toggleSidebar }) {
//   const location = useLocation();
//   const getSidebarBackgroundColor = () => {
//     // Check if the current path matches the 'Employee' or 'Skills' page
//     if (location.pathname.includes('employee') || location.pathname.includes('skills')) {
//       return 'blue'; // Color for Employee or Skills pages
//     }
//     return 'white'; // Default color
//   };
//   // return (
//   //   <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//   //     <button className="close-btn" onClick={toggleSidebar}>×</button>
//   //     {/* Logo Container */}
//   //     <div className="logo-container">
//   //       <img src={logohrms} alt="HRMS Logo" className="logo" />
//   //       <span className="sidebar-title">HRMS</span>
//   //     </div>
//   //     <ul className="sidebar-links">
//   //       <li><a href="./projects">Projects</a></li>
//   //       <li><a href="./employee">Employee</a></li>
//   //       <li><a href="./skills">Skills</a></li>
//   //       <li><a href="./roles">Roles</a></li>
//   //       <li><a href="./techstack">Techstack</a></li>
//   //       <li><a href="./department">Department</a></li>
//   //       <li><a href="./business-unit">BU</a></li>
//   //       <li><a href="/logout" onClick={toggleSidebar}>Logout</a></li>
//   //     </ul>
//   //   </div>
//   // );
//   return (
//     <div className={`sidebar-container`}>
//       <div className={`logo-title ${isOpen ? 'collapsed' : ''}`}>
//         <img src={logohrms} alt="HRMS Logo" className="logo" />
//         {!isOpen && <span className="sidebar-title">HRMS</span>}
//       </div>

//       {/* Sidebar itself */}
//       <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{ backgroundColor: getSidebarBackgroundColor() }}>
//         <button className="close-btn" onClick={toggleSidebar}>×</button>
//         <ul className="sidebar-links">
//           <li><a href="./projects">Projects</a></li>
//           <li><a href="./employee">Employee</a></li>
//           <li><a href="./skills">Skills</a></li>
//           <li><a href="./roles">Roles</a></li>
//           <li><a href="./techstack">Techstack</a></li>
//           <li><a href="./department">Department</a></li>
//           <li><a href="./business-unit">BU</a></li>
//           <li><a href="/logout" onClick={toggleSidebar}>Logout</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// }


function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      {/* <div className="logo-container">
        <img src={logohrms} alt="HRMS Logo" className="logo" />
      </div> */}
      <ul className="sidebar-links">
        <li><a href="/projects">Projects</a></li>
        <li><a href="/employee">Employee</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/roles">Roles</a></li>
        <li><a href="/techstack">Techstack</a></li>
        <li><a href="/department">Department</a></li>
        <li><a href="/business-unit">BU</a></li>
        <li><a href="/logout" onClick={toggleSidebar}>Logout</a></li>
      </ul>
    </div>
  );
}



export default Sidebar;
