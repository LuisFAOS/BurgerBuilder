import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './styles.css'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

function CheckoutSummary(props){

  
    return (
        <div className="CheckoutSummary">
            <h1>
                Thank's to use our services!! 
                <br/>That's your burger!
            </h1>
            <Burger ingredients={props.ingredients}/>
            <Button btnType="Danger" clicked={()=> props.history.push("/")}>
                Cancel
            </Button>
            <Button btnType="Success" clicked={props.checkoutContinue}>
                Conclude
        </Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      ingredients:state.ingredients,
      totalPrice:state.totalPrice
    }
}  

export default connect(mapStateToProps)(withRouter(CheckoutSummary))