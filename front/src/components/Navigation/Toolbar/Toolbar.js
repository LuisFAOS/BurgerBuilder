import React from 'react';
import './styles.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

export default function Toolbar(props) {
  return (
    <header className="Toolbar">
        <DrawerToggle clicked={props.show}/>
        <Logo className="DesktopOnly"/>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
  );
}

