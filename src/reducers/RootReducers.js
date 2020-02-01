import { combineReducers } from 'redux'
import loginReducer from './login'

const reducers = {
    loginReducer 
}

console.log('RootReducer')

export default combineReducers(reducers)