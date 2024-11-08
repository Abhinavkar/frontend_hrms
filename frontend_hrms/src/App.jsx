// App.jsx
import React from 'react';
import RouterComponent from './RouterComponent'; // Import the Router
import Layout from './components/layouts/Layout'; // Corrected path
import { Routes, Route } from 'react-router-dom'; // Added Routes import
import Dashboard from './components/Dashboard/Dashboard'; // Make sure Dashboard is correctly imported
import Logout from './components/Logout/Logout'
import LoginPage from './pages/Login/Login';
// import Navbar from './components/Navbar/Navbar';
// import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} /> */}
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <RouterComponent /> 
      </Layout> 
    </div>
  );
};

export default App;
