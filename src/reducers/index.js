import { combineReducers } from 'redux'

const reducers = {
    field: newValue => {
        return {value: newValue}
    }
}

export default combineReducers(reducers)