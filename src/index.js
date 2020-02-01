import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/RootReducers'

import Routes from './Routes'
import './styles'

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <Routes />
    </Provider>, 
document.getElementById('root'))