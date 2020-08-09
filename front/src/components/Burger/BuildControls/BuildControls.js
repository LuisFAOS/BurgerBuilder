import React from 'react';
import './styles.css';
import BuildControl from './BuildControl/BuildControl'

export default function BuildControls(props) {
  const controlsIngredients = [
    "Salad",
    "Cheese",
    "Meat",
    "Bacon"
  ]

  const quantityChecker = Object.values(props.disabled).reduce((acc,value)=> acc && value) 

  return(
      <div className="BuildControls">
        <p>Current price: <strong>R$ {props.price}</strong></p>
        {controlsIngredients.map(value => {
          return <BuildControl 
          key={value} 
          label={value}
          added={()=> props.IngredientAdded(value)}
          removed={()=> props.IngredientRemoved(value)}
          disabled={props.disabled[value]}
          />
        })}
        <button 
          className="OrderButton"
          onClick={props.show}
          disabled={quantityChecker}>ORDER NOW</button>
      </div>
  ) 
} 