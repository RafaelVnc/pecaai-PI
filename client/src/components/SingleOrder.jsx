import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const SingleOrder = ({ itens, total, codigoPedido, status, nextStatus }) => {
  const statusColors = {
    "Recebido": "salmon",
    "Em Produção": "yellow",
    "Concluído": "lightgreen"
  };

  return (
    <div className='single-order__container' style={{ backgroundColor: statusColors[status] || 'white' }}>
      <h2 className='single-order__cod-pedido'>{codigoPedido}</h2>
      <div className="single-order__labels">
        <span>Produto</span>
        <span className='single-order__itens-list--qtd'>Qtd</span>
        <span>PreçoUND</span>
        <span>Subtotal</span>
      </div>
      <ul className='single-order__itens-list'>
        {itens.map((item, index) => (
          <li key={item._id || index}>
            <span>{item.nome}</span>
            <span className='single-order__itens-list--qtd'>{item.quantidade}</span>
            <span>R$ {item.preco.toFixed(2)}</span>
            <span>R$ {item.subtotal.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      
      <h3 className='single-order__itens-total'>Total: R$ {total.toFixed(2)}</h3>

      <button className='single-order__itens-next-btn'>{nextStatus} <FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
  )
}

export default SingleOrder