import React from 'react'

const TermosServico = ({ onClose }) => {
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h3>Termos de Serviço Peça Aí!</h3>
      <p> Termos de servico </p>
    </div>
    
  )
}

export default TermosServico