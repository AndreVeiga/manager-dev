import { types } from '../config/action_types'

const defaultState = {
  isLoad: false,
  error: null,
  email: '',
  password: '',
  user: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.login.loading:
      return {
        ...state,
        isLoad: true
      }

    case types.login.error:
      return {
        ...state,
        error: action.payload
      }

    case types.login.typing.email:
      return {
        ...state,
        error: null,
        email: action.payload
      }

    case types.login.typing.password:
      return {
        ...state,
        error: null,
        password: action.payload
      }

    case types.login.success:
      return {
        ...state,
        isLoad: false,
        user: action.payload
      }


    default:
      return state
  }
}