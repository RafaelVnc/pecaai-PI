import React from 'react'

const SingleItem = ({ _id, name, descricao, preco, fotoURL, ativo }) => {
  return (
    <div className='single-item__img'>
      <img src={`${fotoURL}`} alt='Foto do item'/>
      <div className='single-item__text'>
        <h2>{name}</h2>
        <p>{descricao}</p>
        <h3>{preco}</h3>
      </div>
      <div className='single-item__ativo-btn'>
        {ativo}
      </div>
    </div>
  )
}

export default SingleItem