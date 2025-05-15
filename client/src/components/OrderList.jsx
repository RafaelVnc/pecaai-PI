import React from 'react'
import SingleOrder from './SingleOrder'

const OrderList = ({ status, orderArray, nextStatus, refreshPedidos }) => {
  const finalItems = Infinity;

  return (
    <div className='order-list'>
      <div className='order-list__header'>
        <h1>{ status }</h1>
      </div>
      <div className='order-list__container'>
        {orderArray
          .filter((_, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleOrder 
              {...currObj}
              key={`${status}-${index}`}
              nextStatus={nextStatus}
              status={status}
              refreshPedidos={refreshPedidos}
            />
        ))}
      </div>
    </div>
  );
}


export default OrderList;