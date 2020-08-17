import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

function Checkout(props) {

    const checkoutContinueHandler=()=>{
        props.history.replace('/checkout/data-input')
    } 
    if(!(localStorage.getItem('ingredients') && localStorage.getItem('totalPrice'))){
        props.history.push('/')
        return null
    }
    else {
        return (
                <>
                    <CheckoutSummary checkoutContinue={checkoutContinueHandler}/>
                </>);
    }
}

export default Checkout;