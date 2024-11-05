// App.jsx
import React from 'react';
import RouterComponent from './RouterComponent'; // Import the Router
import Navbar from "./layouts/Navbar/Navbar"

const App = () => {
  return (

    <div>
      <Navbar/>
      <RouterComponent />  {/* Render the Router component */}
    </div>
  );
};

export default App;
