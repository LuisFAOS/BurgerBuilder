import { createStore, applyMiddleware, combineReducers } from 'redux'
import ingredientsReducer from './reducers/ingredientsReducer'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching')                    
            const result = next(action)
            console.log('[Middleware] next state', store.getState())
            return result; 
        }
    }
}

const rootReducer = combineReducers({ingredientsReducer,authReducer})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store