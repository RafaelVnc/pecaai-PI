import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const SingleItem = ({ _id, name, descricao, preco, fotoURL, ativo }) => {
  return (
    <div className='single-item'>
      <div className='single-item__img'>
        <img src={`${fotoURL}`} alt='Foto do item'/>
      </div>
      <div className='single-item__text'>
        <h2>{name}</h2>
        <p>{descricao}</p>
        <h3>{preco.toFixed(2)}</h3>
      </div>
      <div className="single-item__edit">
        <Link to="/itemEdit"> <FontAwesomeIcon icon={faPenToSquare}/> Editar item </Link>
      </div>
      <div className='single-item__ativo-btn'>
        <button> 
          {ativo ? <FontAwesomeIcon icon={faToggleOn}/> : <FontAwesomeIcon icon={faToggleOff} />} 
        </button>
      </div>
    </div>
  )
}

export default SingleItem