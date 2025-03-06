import React, { useEffect } from 'react';

const SuccessModal = () => {
  const handleRedirect = () => {
    window.location.replace("/cardapio");
  };

  return (
    <div className='modal__bkground'>
      <div className='success-modal'>
        <h1>Operação realizada com sucesso!</h1>
        <button onClick={handleRedirect}>Ok</button>
      </div>
    </div>
  );
};

export default SuccessModal;
