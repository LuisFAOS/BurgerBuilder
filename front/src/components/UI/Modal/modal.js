import React from 'react';
import './styles.css';
import Backdrop from '../Backdrop/Backdrop'

function Modal(props) {
  return (
    props.show ?(<div onClick={props.clicked}>
                    <Backdrop clicked={props.close}/>
                    <div className="Modal">
                        {props.children}
                    </div>
                  </div>):
                  ""
  );
}

export default Modal;