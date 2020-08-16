import React, {useState} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import './styles.css'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler'

function BurgerBuilder(props) {

  const ingredient_prices = {
    Salad: 2.5,
    Cheese: 3.4,
    Meat: 2.3,
    Bacon: 1.7
  };

  const [builder,setBuilder]=useState({
    ingredients:{
      Salad:0,
      Cheese:0,
      Meat:0,
      Bacon:0
    },
    totalPrice:4,
    purchasing:false,
    loading:false
  })


  const addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...builder.ingredients
    }
    updatedIngredients[type]+=1
    const newPrice = ingredient_prices[type] + builder.totalPrice
    setBuilder({ingredients:updatedIngredients, totalPrice:newPrice})
  }

  const removeIngredientHandler = (type) => {
    
    if (builder.ingredients[type] > 0) {
      
      const updatedIngredients = {
        ...builder.ingredients
      }

      updatedIngredients[type]-=1
      const newPrice = builder.totalPrice - ingredient_prices[type]
      setBuilder({ingredients:updatedIngredients, totalPrice:newPrice})
    }

  }

  const showOrCloseSummary = ()=>{
    setBuilder({
      ingredients:builder.ingredients,
      totalPrice:builder.totalPrice,
      purchasing:builder.purchasing ? false:true
    })
  }

  const PurchasingContinueHandler = ()=> {
    setBuilder({ingredients:builder.ingredients,
                totalPrice:builder.totalPrice,
                purchasing:builder.purchasing,
                loading: true
              })
    localStorage.setItem('ingredients',JSON.stringify(builder.ingredients))
    localStorage.setItem('totalPrice',builder.totalPrice.toFixed(2))
    props.history.push('/checkout')
  }



  const disableButton={
    ...builder.ingredients
  }

  for (const key in disableButton) {
    disableButton[key] = disableButton[key] <= 0
  }

  let SummaryOrLoader = (<OrderSummary 
                          ingredients={builder.ingredients}
                          close={showOrCloseSummary}
                          continue={PurchasingContinueHandler}
                          totalPrice={builder.totalPrice.toFixed(2)}
                        />)

  if (builder.loading){
    SummaryOrLoader=<Spinner/>
  }
  return (
      <>
      {builder.purchasing && 
        <Modal close={showOrCloseSummary} show={true}>
          {SummaryOrLoader}
        </Modal>
      }
        <Burger ingredients={builder.ingredients}/>
        <BuildControls 
          price={builder.totalPrice.toFixed(2)}
          IngredientAdded={addIngredientHandler}
          IngredientRemoved={removeIngredientHandler}
          disabled={disableButton}
          show={showOrCloseSummary}
        />
      </>
  );
}

export default withErrorHandler(BurgerBuilder, axios)