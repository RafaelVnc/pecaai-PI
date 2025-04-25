import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const Landing = () => {
  return (
    <div className='landing'>
      <img src={logo} className='landing__logo'/>
      <div className='landing__btns'>
        <Link to={"/loginCliente"}>Sou Cliente</Link>
        <Link to={"/loginEstabelecimento"}>Sou Estabelecimento</Link>
      </div>
    </div>
  )
}

export default Landing