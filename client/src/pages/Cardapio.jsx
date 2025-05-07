import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { getCardapioArray } from '../assets/database/cardapioArray.js';
import { Link } from "react-router-dom";

const Cardapio = () => {
  const [cardapioArray, setCardapioArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCardapioArray();
      setCardapioArray(data);
    };

    fetchData();
  }, []);

  const entradaArray = cardapioArray.filter(i => i.categoria === "Entrada");
  const pratoPrincipalArray = cardapioArray.filter(i => i.categoria === "Prato principal");
  const bebidaArray = cardapioArray.filter(i => i.categoria === "Bebida");
  const sobremesaArray = cardapioArray.filter(i => i.categoria === "Sobremesa");

  return (
    <div className='main'>
      <ItemList categoria="Entrada" itensArray={entradaArray} isEstabelecimento={true}/>
      <ItemList categoria="Prato principal" itensArray={pratoPrincipalArray} isEstabelecimento={true}/>
      <ItemList categoria="Bebida" itensArray={bebidaArray} isEstabelecimento={true}/>
      <ItemList categoria="Sobremesa" itensArray={sobremesaArray} isEstabelecimento={true}/>
      
      <div className='cardapio__add-btn'>
        <Link to="/itemAdd"> + Adicionar item </Link>
      </div>
    </div>
  );
};

export default Cardapio;
