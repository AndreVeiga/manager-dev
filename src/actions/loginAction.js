import { push } from 'react-router-redux'
import { types, trigger } from '../config/action_types'
import URL from '../config/urls'
import message from '../config/message'
import axios from 'axios'

export const loginTypingEmail = value =>
  trigger(types.login.typing.email, value)

export const loginTypingPassword = value =>
  trigger(types.login.typing.password, value)

export const login = (email, passwrod) => {
  return email.length && passwrod.length
    ? request(email, passwrod)
    : loginError(message.error.fieldsEmpty)
}

const request = (email, password) => (dispatch) => {
  dispatch(loginLoading())

  axios.post(URL.login, { email, password })
    .then(response => {
      dispatch(loginSuccess(response.data))
      dispatch(push('/dashboard'))
    })
    .catch(_ => loginError(message.error.requestFail))
}

const loginSuccess = data => trigger(types.login.success, data)
const loginLoading = _ => trigger(types.login.loading, null)
const loginError = error => trigger(types.login.error, error)
