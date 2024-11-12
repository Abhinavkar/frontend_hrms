// Header.jsx
import React from 'react';
import profile from './assets/profile.jpeg'
function Header() {
  return (
    <div className="header">
      <input type="text" placeholder="Search..." />
      <div className="profile">
        {/* Icons and user profile */}
        <img src= {profile} alt="Profile" />
      </div>
    </div>
  );
}

export default Header;
