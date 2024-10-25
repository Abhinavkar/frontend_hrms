import React from "react"
import { useState } from 'react'
import login from './components/login'
import home from './components/home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<homePage />} /> 
        <Route path="/login" element={<loginPage />} /> 
        
      </Routes>
    </Router>
  );
}

export default App
