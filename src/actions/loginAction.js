import { types, trigger }  from '../config/action_types'

export const login = (email, passwrod) => {
    return !email.length || !passwrod.length 
    ? loginError('email/senha não podem estar vazio.')
    : loginLoading()  
}

export const loginTypingEmail = value => trigger(types.login.typing.email, value)
export const loginTypingPassword = value => trigger(types.login.typing.password, value)

const loginLoading = _ => trigger(types.login.loading, true)
const loginError = error => trigger(types.login.error, error)
