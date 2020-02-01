import React, { useState } from 'react'
import Input from '../utils/Input'
import Logo from '../../assets/img/logo-media.png'

export default props => {

  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')
  
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
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <Input
          classLabel='sr-only'
          label='Senha'
          type='password'
          id='inputPassword'
          classInput='form-control'
          placeholder='Senha'
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />

        <button 
          className='btn btn-lg btn-primary btn-block'
          type='button'
          onClick={_ => props.handleClick(email,senha)}
        >
          Login
        </button>

        <p className='mt-5 mb-3 text-muted'>&copy; Develcode Tecnologia 2020 </p>
      </form>
  )
}