import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'

import App from './App'
import Configs from './config'
import './styles'

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        {Configs()}
        <App />
    </Provider>, 
document.getElementById('root'))