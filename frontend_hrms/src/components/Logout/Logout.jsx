import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear token and any stored user data
    localStorage.removeItem('token');
    document.cookie = 'refresh=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

  useEffect(() => {
    // Clear the token and navigate to login page
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h2>You have been logged out</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
}
export default Logout;
