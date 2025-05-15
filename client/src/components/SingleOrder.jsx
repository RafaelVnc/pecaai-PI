import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const SingleOrder = ({ _id, itens, total, codigoPedido, status, nextStatus, refreshPedidos }) => {
  const statusColors = {
    "Recebido": "#ff4d4d",
    "Em Produção": "#ffff1a",
    "Concluído": "#33cc33"
  };

  const handleNextStatus = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/pedidos/pedido/${_id}`,
        {
          status: nextStatus,
        }
      );

      if (response.status === 200) {
        refreshPedidos(); // Atualiza o estado sem reload
      }
    } catch (error) {
      console.error("Erro ao atualizar o status do pedido:", error);
    }
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
      <button className='single-order__itens-next-btn' onClick={handleNextStatus}>
        {nextStatus} <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default SingleOrder