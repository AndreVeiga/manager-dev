import { push } from 'react-router-redux'
import { types, trigger }  from '../config/action_types'
import URL from '../config/urls'
import message from '../config/message'
import axios from 'axios'

export const loginTypingEmail = value => 
    trigger(types.login.typing.email, value)

export const loginTypingPassword = value => 
    trigger(types.login.typing.password, value)

export const login = (email, passwrod) => {
    return !email.length || !passwrod.length 
    ? loginError(message.error.fieldsEmpty)
    : request(email, passwrod)  
}

const request = (email, password) => (dispatch) => {
    dispatch(loginLoading())
    
    axios.post(URL.login, { email, password })
        .then(response => {
            dispatch(loginSuccess(response.data))
            dispatch(push('/dashboard'))
        })
        .catch(error => loginError(error))
    
}

const loginSuccess = response => trigger(types.login.success, response)
const loginLoading = _ => trigger(types.login.loading, null)
const loginError = error => trigger(types.login.error, error)
