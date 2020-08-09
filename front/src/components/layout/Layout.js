import React,{useState} from 'react';
import './styles.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

function Layout(props) {
  
  const [showSideD,setShowSideD]=useState(false)

  const sideDrawerClosedHandler = (value) => {
    setShowSideD(value)
  }

  return (
    <>
        <Toolbar show={() => sideDrawerClosedHandler(true)}/>
        <SideDrawer closed={() => sideDrawerClosedHandler(false)} show={showSideD}/>
        <main className="main-content">
            {props.children}
        </main>
    </>
  );
}

export default Layout;