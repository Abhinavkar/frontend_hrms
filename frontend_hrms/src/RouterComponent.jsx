import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './pages/Register/Register';
import Department from './pages/Department/Department';
import Bu from './pages/BusinessUnit/Bu';
import Skill from './pages/Skill/Skill';
import Roles from './pages/Roles/Roles';
import Employee from './pages/Employee/Employee';
import Techstack from './pages/Techstack/Techstack';
import About from './pages/About/About';
import Dashboard from './components/Dashboard/Dashboard';

 
const RouterComponent = () => {
  const token = localStorage.getItem('token'); // Checking if user is logged in

  return (

    <Routes>
    <Route path="/dashboard" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={< About />} />
    <Route path="/register" element={<Register />} />
    <Route path="/department" element={<Department />} />
    <Route path="/business-unit" element={<Bu />} />
    <Route path="/skills" element={<Skill />} />
    <Route path="/roles" element={<Roles />} />
    <Route path="/employee" element={<Employee />} />
    <Route path="/techstack" element={<Techstack/>} />
    <Route path = "/logout" element = {<Logout />} />
    <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={token ? "/dashboard" : "/login"} />}
        />
  </Routes>
  
  
      
  );
};

export default RouterComponent;
