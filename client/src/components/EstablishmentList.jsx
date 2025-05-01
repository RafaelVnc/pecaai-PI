import React from 'react';
import SingleEstablishment from './SingleEstablishment';

const EstablishmentList = ({ establishmentArray }) => {
  const finalItems = Infinity;
  
  return (
    <div className='establishment-list__container'>
        {establishmentArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
          <SingleEstablishment
          {...currObj}
          key={`${index}`} />
        ))}
    </div>
  )
}

export default EstablishmentList