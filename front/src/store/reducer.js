import * as actionTypes from './actions'

const INITIAL_STATE = {
    ingredients:{
        Salad: 0,
        Bacon: 0,
        Cheese: 0,
        Meat: 0
    },
    totalPrice: 4
}

const INGREDIENTS_PRICES = {
    Salad: 2.5,
    Cheese: 3.4,
    Meat: 2.3,
    Bacon: 1.7
  };

export default function reducer (state=INITIAL_STATE, action){

    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:

            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredient]:state.ingredients[action.ingredient]+1
                },
                totalPrice:state.totalPrice+INGREDIENTS_PRICES[action.ingredient]
            }
            
        case actionTypes.REMOVE_INGREDIENTS:
            if(state.ingredients[action.ingredient] < 0) return state

            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredient]:state.ingredients[action.ingredient]-1
                },
                totalPrice:state.totalPrice-INGREDIENTS_PRICES[action.ingredient]
            }
    
        case actionTypes.RESET_INGREDIENTS:
            return INITIAL_STATE

        default:
            return state
    }

}