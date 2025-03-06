import React from 'react';
import ItemForm from '../components/ItemForm';
import { cardapioArray } from '../assets/database/cardapioArray.js';
import { useParams } from 'react-router-dom';

const ItemEdit = ( itemObj ) => {
  const {_id} = useParams();
  const { name, preco, categoria, descricao, fotoURL } = cardapioArray.filter(
    (currentItemObj, index) => currentItemObj._id === _id
  )[0];
  
  return (
    <div className='main'>
      <ItemForm method="edit" _id={_id} name={name} preco={preco} categoria={categoria} descricao={descricao} fotoURL={fotoURL}/>
    </div>
  );
};

export default ItemEdit;
