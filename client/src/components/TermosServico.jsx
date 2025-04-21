import React from 'react'

const TermosServico = ({ onClose }) => {
  return (
    <div className='modal__bkground-termos'>  
        <div className='cadastro__modal-termos'>
          <button onClick={onClose}>X</button>
          <h3>Termos de Serviço Peça Aí!</h3>
          <p> A plataforma "Peça Aí" se compromete com a privacidade e a proteção dos dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).</p>
          <p>
          1. Coleta e Uso de Dados:
          Os dados pessoais fornecidos pelos usuários (como nome, e-mail, telefone, CPF, entre outros) são coletados exclusivamente para fins de identificação, autenticação, comunicação e operação da plataforma, como acesso ao sistema, personalização da experiência e segurança do usuário.
          </p>
          
          <p>
          2. Compartilhamento de Dados:
          Não compartilhamos dados pessoais com terceiros, salvo quando necessário para o cumprimento de obrigações legais ou mediante consentimento do usuário.
          </p>

          <p>
          3. Armazenamento e Segurança:
          Os dados são armazenados em ambiente seguro e controlado, com medidas técnicas e administrativas para prevenir acessos não autorizados, perda ou vazamento de informações.
          </p>
          
          <p>
          4. Direitos do Titular:
          O usuário poderá, a qualquer momento, solicitar:

          A confirmação da existência de tratamento de dados;

          O acesso, correção ou exclusão de seus dados;

          A revogação do consentimento previamente concedido.
          </p>
        </div>
    </div>
  )
}

export default TermosServico