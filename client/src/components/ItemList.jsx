import React from 'react';
import SingleItem from './SingleItem';

const ItemList = ({ categoria, itensArray }) => {
  const finalItems = Infinity;
  
  return (
    <div className='item-list'>
      <div className='item-list__header'>
        <h1>{ categoria }</h1>
      </div>
      <div className='item-list__container'>
        {itensArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
          <SingleItem 
          {...currObj}
          key={`${categoria}-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default ItemList;