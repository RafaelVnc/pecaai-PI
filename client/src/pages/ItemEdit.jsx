import React, { useState, useEffect } from 'react';
import ItemForm from '../components/ItemForm';
import { getCardapioArray } from '../assets/database/cardapioArray.js';
import { useParams } from 'react-router-dom';

const ItemEdit = () => {
  const [cardapioArray, setCardapioArray] = useState([]);
  const [item, setItem] = useState(null);
  const {_id} = useParams();

  useEffect(() => {
    const fetchCardapio = async () => {
      const data = await getCardapioArray();
      setCardapioArray(data);
    };

    fetchCardapio();
  }, []);

  useEffect(() => {
    if (cardapioArray.length > 0) {
      const foundItem = cardapioArray.find(currentItemObj => currentItemObj._id === _id);
      if (foundItem) {
        setItem(foundItem);
      }
    }
  }, [cardapioArray, _id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  const { name, preco, categoria, descricao, fotoURL } = item;

  return (
    <div className='main'>
      <ItemForm method="edit" _id={_id} name={name} preco={preco} categoria={categoria} descricao={descricao} fotoURL={fotoURL}/>
    </div>
  );
};

export default ItemEdit;
