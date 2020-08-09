import React from 'react';
import './styles.css'

export default function Backdrop(props) {
  return <div className={`Backdrop ${props.hide}`} onClick={props.clicked}></div>;
}
