import React from 'react'
import { Link } from "react-router-dom";

const SuccessRegisterModal = () => {
  return (
    <div className='modal__bkground-success'>
      <div className='cadastro__success-modal'>
        <h1>Cadastro realizado com Sucesso!</h1>
        <Link to={"/loginEstabelecimento"}>Ok!</Link>
      </div>
    </div>
  )
}

export default SuccessRegisterModal