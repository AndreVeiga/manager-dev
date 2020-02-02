import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, browserHistory } from 'react-router-redux'
import { Provider } from 'react-redux'
import reducer from './reducers/RootReducers'
import thunk from 'redux-thunk'
import Routes from './Routes'
import './config/styles'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
const middlewares = [
    thunk,
    routerMiddleware(browserHistory)
]

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)))

const target = document.getElementById('root')

render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
target)