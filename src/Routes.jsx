import React from 'react'
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom';

import Login from './container/login/Login'
import Dashboard from './container/dashboard/Dashboard'

export default props => (
    <HashRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
   </HashRouter >
)