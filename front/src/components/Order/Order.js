import React from 'react';
import './styles.css';

function Order(props) {
  return (
      <div>
        <p>Comprador:</p>      
        <div>Ingredients:</div>      
        <p>Price:<strong>{props.price}</strong></p>      
      </div>
  );
}

export default Order;