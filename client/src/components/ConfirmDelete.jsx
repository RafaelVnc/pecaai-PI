import React from 'react';
import axios from 'axios';

const ConfirmDelete = ({ _id, name, onClose }) => {
  
  const deleteItem = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/cardapio/item/${_id}`);

      if (response.status === 200){
        onClose();
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao deletar item:", error);
    }
  };

  return (
    <div className='modal-confirm-delete'>
      <div className='modal-confirm-delete__content'>
        <h1>Quer mesmo excluir o item:</h1>
        <h2>{name}</h2>
        <button className='modal-confirm-delete__sim-btn' onClick={deleteItem}>Sim, excluir</button>
        <button className='modal-confirm-delete__nao-btn' onClick={onClose}>Não, voltar</button>
      </div>
    </div>
  )
}

export default ConfirmDelete;