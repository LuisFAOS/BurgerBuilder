import React from 'react';
import './styles.css';
import logo from '../../assets/images/burger-logo.png'

export default function Logo() {
    return (
        <div className="Logo">
            <img src={logo} alt="MyBurger"/>
        </div>
    );
}

