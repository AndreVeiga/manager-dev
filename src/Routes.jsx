import React from 'react'
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom';

import Login from './container/login/Login'

export default props => (
    <HashRouter>
        <Route exact path="/" component={Login} />
   </HashRouter >
)