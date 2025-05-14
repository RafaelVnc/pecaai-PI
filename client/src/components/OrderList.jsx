import React from 'react'
import SingleOrder from './SingleOrder'

const OrderList = ({ status, orderArray, nextStatus }) => {
  const finalItems = Infinity;

  return (
    <div className='order-list'>
      <div className='order-list__header'>
        <h1>{ status }</h1>
      </div>
      <div className='order-list__container'>
        {orderArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
          <SingleOrder 
          {...currObj} nextStatus={nextStatus} status={status}
          key={`${status}-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default OrderList