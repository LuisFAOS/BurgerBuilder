import axios from '../axios-order'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const REMOVE_INGREDIENTS = 'REMOVE_INGREDIENTS'
export const RESET_INGREDIENTS = 'RESET_INGREDIENTS'

export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCESS'
export const AUTH_FAIL = 'AUTH_FAIL'



export const authStart = () => {
    return {
        type: AUTH_START
    }
}

export const authSuccess = authData => {
    return {
        type: AUTH_SUCCESS,
        authData
    }
}

export const authFail = error => {
    return {
        type: AUTH_FAIL,
        error
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart())

        const dataUser = {
            email,
            password
        } 

        axios.post('/users',dataUser)
            .then(response => {
                if(response.data === 'No user found') dispatch(authFail('No user found'))
                else dispatch(authSuccess(response.data))   
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}