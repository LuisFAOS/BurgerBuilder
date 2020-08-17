import React from 'react'
import './styles.css'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import {withRouter} from 'react-router-dom'


function CheckoutSummary(props){
  
    return (
        <div className="CheckoutSummary">
            <h1>
                Thank's to use our services!! 
                <br/>That's your burger!
            </h1>
            <Burger ingredients={JSON.parse(localStorage.getItem('ingredients'))}/>
            <Button btnType="Danger" clicked={()=> props.history.push("/")}>
                Cancel
            </Button>
            <Button btnType="Success" clicked={props.checkoutContinue}>
                Conclude
        </Button>
        </div>
    );
}


export default withRouter(CheckoutSummary)