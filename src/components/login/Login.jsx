import React, { useState } from 'react'
import Input from '../utils/Input'
import Logo from '../../img/logo-media.png'
import Load from '../utils/Loading'

export default function Login(props) {

  const [isLoad, setIsLoad] = useState(false)

  const renderForm = _ => {
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
        />

        <Input
          classLabel='sr-only'
          label='Senha'
          type='password'
          id='inputPassword'
          classInput='form-control'
          placeholder='Senha'
        />

        <button className='btn btn-lg btn-primary btn-block'
          type='button'
          onClick={() => setIsLoad(true)}
        >
          Login
        </button>

        <p className='mt-5 mb-3 text-muted'>&copy; Develcode Tecnologia 2020 </p>
      </form>
    ) 
  }

  return (
    !isLoad ? renderForm() : <Load />
  )
}