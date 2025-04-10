import React from 'react'
import { Link } from "react-router-dom";

const SuccessRegisterModal = () => {
  return (
    <div>
      <h1>Cadastro realizado com Sucesso!</h1>
      <Link to={"/login"}>Ok!</Link>
    </div>
  )
}

export default SuccessRegisterModal