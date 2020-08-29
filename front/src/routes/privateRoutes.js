import React from 'react';
import {Route, Redirect} from 'react-router-dom'


const PrivateRoutes = ({component: Component, isAuthenticated , ...rest}) => {
  return <Route 
          {...rest} 
          render={
            props => isAuthenticated ? (<Component {...props}/>) : 
            (<Redirect to={{pathname:'/auth', state: props.location}}/>)
          }/>
}

export default PrivateRoutes;