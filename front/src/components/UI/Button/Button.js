import React from 'react';
import './styles.css';

export default function Button(props) {
  return <button type="submit"
            className={`Button ${props.btnType}`}
            onClick={props.clicked}
            disabled={props.disabled}
        >
            {props.children}
        </button>;
}

