import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

function Checkout(props) {

    const checkoutContinueHandler=()=>{
        setTimeout(()=>window.scrollTo(0,1000),100)
        props.history.replace('/checkout/data-input')
    } 

    return (
            <>
                <CheckoutSummary checkoutContinue={checkoutContinueHandler}/>
            </>
    );
}
  
export default Checkout;