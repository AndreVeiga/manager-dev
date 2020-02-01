import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/RootReducers'

import Routes from './Routes'
import './styles'

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
    <Provider store={createStore(reducer, devTool)}>
        <Routes />
    </Provider>, 
document.getElementById('root'))