import React from 'react';
import ItemList from '../components/ItemList';
import { cardapioArray } from '../assets/database/cardapioArray.js';

const Cardapio = () => {
  const entradaArray = cardapioArray.filter(i => i.categoria === "Entrada");
  const pratoPrincipalArray = cardapioArray.filter(i => i.categoria === "Prato principal");
  const bebidaArray = cardapioArray.filter(i => i.categoria === "Bebida");
  const sobremesaArray = cardapioArray.filter(i => i.categoria === "Sobremesa");

  return (
    <div className='main'>

      <ItemList categoria="Entrada" itensArray={entradaArray}/>
      <ItemList categoria="Prato principal" itensArray={pratoPrincipalArray}/>
      <ItemList categoria="Bebida" itensArray={bebidaArray}/>
      <ItemList categoria="Sobremesa" itensArray={sobremesaArray}/>
      
    </div>
  );
}

export default Cardapio