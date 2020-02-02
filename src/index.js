import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/RootReducers'
import thunk from 'redux-thunk'
import Routes from './Routes'
import './styles'

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, applyMiddleware(thunk), devTool)

const target = document.getElementById('root')

render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
target)