import React from 'react'
import PropTypes from 'prop-types'
import Input from '../utils/Input'
import Logo from '../../assets/img/logo-media.png'

const FormLogin = props => {
  return (
    <form className='form-signin'>
      <img className='mb-4'
        src={Logo}
        alt='Logo da Develcode'
      />

      <h1 className='h3 mb-3 font-weight-normal'>
        Develcode
      </h1>

      <Input
        classLabel='sr-only'
        label='Endereço de email'
        type='email'
        id='inputEmail'
        classInput='form-control'
        placeholder='Seu email'
        value={props.email}
        onChange={e => props.handleChangeEmail(e.target.value)}
        required
      />

      <Input
        classLabel='sr-only'
        label='Senha'
        type='password'
        id='inputPassword'
        classInput='form-control'
        placeholder='Senha'
        value={props.password}
        onChange={e => props.handleChangePassword(e.target.value)}
        required
      />

      {props.error && <div className='alert alert-danger' role='alert'>
        {props.error}
      </div>}

      <button
        className='btn btn-lg btn-primary btn-block'
        type='button'
        onClick={_ => props.handleClick()}
      >
        Login
        </button>

      <p className='mt-5 mb-3 text-muted'>
        &copy; Develcode Tecnologia {new Date().getFullYear()} </p>
    </form>
  )
}

export default FormLogin

FormLogin.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  error: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
}