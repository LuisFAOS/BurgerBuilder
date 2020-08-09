import React from 'react';
import './styles.css';

export default function Button(props) {
  return <button
            className={`Button ${props.btnType}`}
            onClick={props.clicked}
        >
            {props.children}
        </button>;
}

