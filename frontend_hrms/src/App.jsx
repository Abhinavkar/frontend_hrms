// App.jsx
import React from 'react';
import RouterComponent from './RouterComponent'; // Import the Router

import Layout from './layouts/Layout';
import { Route } from 'react-router-dom';

const App = () => {
  return (

    <div>
      <Layout>
          <RouterComponent /> 
      </Layout> 
      
    </div>
  );
};

export default App;
