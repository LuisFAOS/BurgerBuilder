import React from 'react';
import './styles.css';
import NavigationItem from './NavigationItem/NavigationItem'

export default function NavigationItems(props) {
  return (
    <ul className="NavigationItems">
        <NavigationItem link="/" children="Burger Builder" exact/>
        <NavigationItem link="/orders" children="Orders"/>
    </ul>
  );
}

