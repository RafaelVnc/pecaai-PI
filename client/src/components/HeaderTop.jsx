import React from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


const HeaderTop = () => {
  return (
    <div className='header-cliente'>
      <div className='header-cliente__left'></div>
      <img src={logo} alt="Logo peça aí!" className='header-cliente__logo' />
      <Link to={"/loginEstabelecimento"} className='header-cliente__link'>Meu Gerenciador</Link>
    </div>
  )
}

export default HeaderTop