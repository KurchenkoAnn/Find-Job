import React from 'react';
import Layout from './Components/Layout';
import  { Route } from 'react-router';
import Home from './Components/Home';

function App() {
  return (
    <Layout>
      <Route exact path='/' content={Home}/>
    </Layout>
  );
}

export default App;
