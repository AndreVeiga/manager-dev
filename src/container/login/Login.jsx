import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, loginTypingEmail, loginTypingPassword } from '../../actions/loginAction'

import Load from '../../components/utils/Loading'
import LoginForm from '../../components/login/FormLogin'

const Login = props => {
  return (
    props.isLoad
      ? <Load />
      : <LoginForm
          email={props.email}
          password={props.password}
          handleClick={_ => props.login(props.email, props.password)}
          error={props.error}
          handleChangeEmail={props.loginTypingEmail}
          handleChangePassword={props.loginTypingPassword}
        />
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoad: loginReducer.isLoad,
    error: loginReducer.error,
    email: loginReducer.email,
    password: loginReducer.password,
    user: loginReducer.user
  }
}

const mapDispatchToProps = dispatch => 
          bindActionCreators({ login, loginTypingEmail, loginTypingPassword }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

Login.propTypes = {
  isLoad: PropTypes.bool.isRequired,
  loginTypingEmail: PropTypes.func.isRequired,
  loginTypingPassword: PropTypes.func.isRequired,
  error: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  user: PropTypes.object
}
