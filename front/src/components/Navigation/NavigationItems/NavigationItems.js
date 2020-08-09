import React from 'react';
import './styles.css';
import NavigationItem from './NavigationItem/NavigationItem'

export default function NavigationItems(props) {
  return (
    <ul className="NavigationItems">
        <NavigationItem link="/" children="Burger Builder" active/>
        <NavigationItem link="/" children="Checkout"/>
    </ul>
  );
}

