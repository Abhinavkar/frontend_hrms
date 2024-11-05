// Router.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Home from './pages/Home/Home';
// import About from './pages/About';
import Login from './pages/Login/Login';
// import Dashboard from './pages/Dashboard';
// import NotFound from './pages/NotFound';

// Main Router Component
const RouterComponent = () => {
  return (

      <Routes>
        {/* Define the routes for your pages */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
  
  );
};

export default RouterComponent;
