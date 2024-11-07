// App.jsx
import React from 'react';
import RouterComponent from './RouterComponent'; // Import the Router

import Layout from './layouts/Layout';
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
