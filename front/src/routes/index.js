import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom'
import Auth from '../containers/Auth/Auth'
import PrivateRoute from './privateRoutes'
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'
import Checkout from '../containers/Checkout/Checkout'
import ContactData from '../containers/Checkout/ContactData/ContactData'
import Orders from '../containers/Orders/Orders'
import Layout from '../components/layout/Layout'
// import { Container } from './styles';

const routes = (props)=> {
  
  const privateRoutes = (
    <>
      <PrivateRoute path="/" exact isAuthenticated={props.isAuthenticated} component={BurgerBuilder}/>
      <PrivateRoute path="/checkout" isAuthenticated={props.isAuthenticated} component={Checkout}/>
      <PrivateRoute path="/orders" isAuthenticated={props.isAuthenticated} component={Orders}/>
      <PrivateRoute path='/checkout/data-input' isAuthenticated={props.isAuthenticated} component={ContactData}/>
    </>)

  return (
    <>
      {props.isAuthenticated ? <Layout children={privateRoutes}/>:privateRoutes}
      <Route path="/auth" render={()=> props.isAuthenticated ? 
        <Redirect to={{pathname:'/', state: props.location}}/>
        :
        <Auth/>}/>
    </>
  )
}//aa@aa.aa
export default withRouter(routes);