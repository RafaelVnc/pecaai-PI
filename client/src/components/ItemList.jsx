import React from 'react';
import SingleItem from './SingleItem';


const ItemList = ({ categoria, itensArray, isEstabelecimento, onAddItem }) => {
  const finalItems = Infinity;
  
  return (
    <div
      className='item-list'
      style={
        isEstabelecimento === false
          ? { background: 'white' }
          : {}
      }
    >
      <div className='item-list__header'>
        <h1 className={!isEstabelecimento ? 'establishment-page__cardapio-titles' : ''}>{ categoria }</h1>
      </div>
      <div className='item-list__container'>
        {itensArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
          <SingleItem 
          {...currObj} isEstabelecimento={isEstabelecimento} onAddItem={onAddItem}
          key={`${categoria}-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default ItemList;