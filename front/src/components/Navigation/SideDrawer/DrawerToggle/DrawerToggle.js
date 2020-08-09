import React from 'react';
import './styles.css';

export default function DrawerToggle(props) {
  return (
    <div className="DrawerToggle Menu" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  );
}

