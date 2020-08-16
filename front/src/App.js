import React from 'react';
import Layout from './components/layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {Route} from 'react-router-dom'
import Orders from './containers/Orders/Orders'

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/orders" component={Orders}/>
      </Layout>
    </div>
  );
}

