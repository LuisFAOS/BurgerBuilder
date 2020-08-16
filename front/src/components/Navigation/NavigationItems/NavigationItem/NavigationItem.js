import React from 'react';
import {NavLink} from 'react-router-dom'

export default function NavigationItem(props) {
  return (
        <li className="NavigationItem">
            <NavLink to={props.link}
                className={props.active ? "active":null}
                exact
            >
                {props.children}
            </NavLink>
        </li>
);
}

