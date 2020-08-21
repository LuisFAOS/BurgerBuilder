import React, {useState} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import './styles.css'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler'
import { connect } from 'react-redux'


function BurgerBuilder(props) {

  const [funcs,setFuncs]=useState({
    purchasing:false,
    loading:false
  })

  const showOrCloseSummary = ()=>{
    setFuncs({
      purchasing:funcs.purchasing ? false:true
    })
  }

  const PurchasingContinueHandler = ()=> {
    setFuncs({
      purchasing:funcs.purchasing,
      loading: true
    })
    props.history.push('/checkout')
  }



  const disableButton={
    ...props.ingredients
  }

  for (const key in disableButton) {
    disableButton[key] = disableButton[key] <= 0
  }

  let SummaryOrLoader = (<OrderSummary 
                          ingredients={props.ingredients}
                          close={showOrCloseSummary}
                          continue={PurchasingContinueHandler}
                          totalPrice={props.totalPrice}
                        />)

  if (funcs.loading){
    SummaryOrLoader=<Spinner/>
  }
  return (
      <>
      {funcs.purchasing && 
        <Modal close={showOrCloseSummary} show={true}>
          {SummaryOrLoader}
        </Modal>
      }
        <Burger ingredients={props.ingredients}/>
        <BuildControls 
          price={props.totalPrice}
          IngredientAdded={props.onAddIngredient}
          IngredientRemoved={props.onRemoveIngredient}
          disabled={disableButton}
          show={showOrCloseSummary}
        />
      </>
  );
}

const mapStateToProps = state => {
  return {
    ingredients:state.ingredients,
    totalPrice: state.totalPrice.toFixed(2)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: ingredientName => dispatch({type:'ADD_INGREDIENTS', ingredient: ingredientName}),
    onRemoveIngredient: ingredientName => dispatch({type:'REMOVE_INGREDIENTS', ingredient: ingredientName})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))