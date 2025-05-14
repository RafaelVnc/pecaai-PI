import React, { useEffect } from 'react';

const SuccessModal = ( { isEstablishment } ) => {
  const handleRedirect = () => {
    if (!isEstablishment) window.location.replace("/cardapio");
    if (isEstablishment) window.location.reload();
  };

  return (
    <>
      {isEstablishment && (
        <div className='establishment-page__modal-bkground'>
          <div className='establishment-page__success-modal'>
            <h1>Operação realizada com sucesso!</h1>
            <button onClick={handleRedirect}>Ok</button>
          </div>
        </div>
      )}
      {!isEstablishment &&(
        <div className='modal__bkground'>
          <div className='success-modal'>
            <h1>Operação realizada com sucesso!</h1>
            <button onClick={handleRedirect}>Ok</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessModal;
