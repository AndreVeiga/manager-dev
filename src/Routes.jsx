import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuth } from './config/auth'

import Login from './container/login/Login'
import Dashboard from './container/dashboard/Dashboard'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuth
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: props.location }} />
    )} />
)

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
    </BrowserRouter >
)