import React from "react"
import LoginPage from './components/Login'
import Home from "./components/Home"

import { Route,Routes,Router } from "react-router-dom"
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
  );
}

export default App
