import React from 'react';
import Button from '../../UI/Button/Button'

export default function OrderSummary(props) {
  
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey=>{
            return (
                <li key={igKey}>
                    {igKey}: {props.ingredients[igKey]}
                </li>
            )
        })

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <strong>Total Price: R$ {props.totalPrice}</strong>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" 
                clicked={props.close}> CANCEL </Button>
            <Button btnType="Success" 
                clicked={props.continue}> CONTINUE </Button>
        </>
    );
}
