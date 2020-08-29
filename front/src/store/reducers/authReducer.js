import * as actionTypes from '../actions'

const INITIAL_STATE = {
    email:'',
    password:'',
    isAuthenticated:false,
    token:'',
    loading: false,
    error:''
}

export default function authReducer(state=INITIAL_STATE, action) {
    
    switch (action.type) {

        case actionTypes.AUTH_START:
            return{
                ...state,
                loading:true
            }
            
        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                loading:false,
                error: action.error
            }

        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                email:action.authData.email,
                password:action.authData.password,
                token:action.authData.token,
                loading: false,
                isAuthenticated:true
            }

        default:
            return state
    }

}