import React from 'react';
import Routes from './routes'
import { connect } from 'react-redux'


function App(props) {

  localStorage.setItem('isAuthenticated',props.isAuthenticated)
  
  return (
    <div className="App">
          <Routes isAuthenticated={props.isAuthenticated}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {isAuthenticated: state.authReducer.isAuthenticated}
}



export default connect(mapStateToProps)(App)

