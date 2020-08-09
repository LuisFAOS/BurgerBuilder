import React from 'react';
import './styles.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

export default function SideDrawer(props) {
  
  let attachedClasses = ["SideDrawer","Close"]

  if (props.show) {
    attachedClasses = ["SideDrawer","Open"]
  }

  return (
    <>
      {props.show && <Backdrop hide="CloseBackdrop" clicked={props.closed}/>}
      <div className={attachedClasses.join(' ')}>
        <div style={{height:'10%', marginBottom:'10px'}}>
            <Logo />
        </div>
          <nav>
              <NavigationItems/>
          </nav>
      </div>
    </>
  );
}
