import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'

function Checkout(props) {

    const checkoutContinueHandler=()=>{
        window.scrollTo(0,1000)
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
                    <Route path='/checkout/data-input' component={ContactData}/>
                </>);
    }
}

export default Checkout;