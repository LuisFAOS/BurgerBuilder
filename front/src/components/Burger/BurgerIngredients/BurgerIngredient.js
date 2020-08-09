import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './styles.css';

class BurgerIngredients extends Component{
  render (){
    
    let ingredient=null;
    let ingredients=['Meat','BreadBottom','Cheese',
    'Salad','Bacon']

    if (this.props.type==='BreadTop') {
        ingredient = (
          <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
          </div>
        )
    }
    else if(ingredients.includes(this.props.type)){
      ingredient=(<div className={this.props.type}></div>)
    
    }else ingredient=null

    return ingredient;
  }
}

BurgerIngredients.propTypes = {
    type:PropTypes.string.isRequired
}

export default BurgerIngredients