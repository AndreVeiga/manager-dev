import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuth } from './config/auth'

import Login from './container/login/Login'
import Dashboard from './container/dashboard/Dashboard'
import Planilha from './container/spreadSheet/SpreadSheet'

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
            <Route exact path='/planilha' component={Planilha} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route exact path='/*' component={Login} />
        </Switch>
    </BrowserRouter >
)