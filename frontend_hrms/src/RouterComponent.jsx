import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Department from './pages/Department/Department';
import Bu from './pages/BusinessUnit/Bu';
import Skill from './pages/Skill/Skill';
import Roles from './pages/Roles/Roles';
import Employee from './pages/Employee/Employee';
import Techstack from './pages/Techstack/Techstack';


 
const RouterComponent = () => {
  return (

    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/department" element={<Department />} />
    <Route path="/business-unit" element={<Bu />} />
    <Route path="/skills" element={<Skill />} />
    <Route path="/roles" element={<Roles />} />
    <Route path="/employee" element={<Employee />} />
    <Route path="/techstack" element={<Techstack/>} />
  </Routes>
  
  
      
  );
};

export default RouterComponent;
