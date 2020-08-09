import React from 'react';
import Layout from './components/layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

export default function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

