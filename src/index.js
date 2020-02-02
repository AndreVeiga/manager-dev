import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, browserHistory } from 'react-router-redux'
import { Provider } from 'react-redux'
import reducer from './reducers/RootReducers'
import thunk from 'redux-thunk'
import Routes from './Routes'
import './config/styles'

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
    
const middlewares = [
    thunk,
    routerMiddleware(browserHistory)
]

const store = createStore(reducer, applyMiddleware(...middlewares), devTool)

const target = document.getElementById('root')

render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
target)