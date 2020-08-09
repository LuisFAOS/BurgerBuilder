import React from 'react';
import './styles.css';
import Backdrop from '../Backdrop/Backdrop'

function Modal(props) {
  return (
    <>
      <Backdrop clicked={props.close}/>
      <div className="Modal">
          {props.children}
      </div>
    </>
  );
}

export default Modal;