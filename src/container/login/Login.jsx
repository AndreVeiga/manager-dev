import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { teste } from '../../actions/loginAction'

import Load from '../../components/utils/Loading'
import LoginForm from '../../components/login/FormLogin'

const Login = props => {
  
  const handleClick = (email, senha) => {
    console.log('isLoad no container => ',props.isLoad)
    teste()
  }

  return (
    props.isLoad
      ? <Load />
      : <LoginForm handleClick={handleClick} />
  )
}

const mapStateToProps = ({ loginReducer }) => {
  console.log(loginReducer)
  return {
    isLoad: loginReducer.isLoad
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ teste }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
