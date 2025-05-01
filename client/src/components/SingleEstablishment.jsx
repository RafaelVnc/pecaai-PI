import React from 'react'
import { Link } from "react-router-dom";

const generateColorFromString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += (`00${value.toString(16)}`).slice(-2);
  }
  return color;
};

const Establishment = ({ _id, nomeEstabelecimento }) => {
  const color = generateColorFromString(nomeEstabelecimento || '');

  return (
    <Link className='single-establishment__container' to={`/estabelecimento/${_id}`}>
      <h2 
        className='single-establishment__icon' 
        style={{ backgroundColor: color}}
      >
        {nomeEstabelecimento.charAt(0)}
      </h2>
      <h3>{nomeEstabelecimento}</h3>
    </Link>
  )
}

export default Establishment;