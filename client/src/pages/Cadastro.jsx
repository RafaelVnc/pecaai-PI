import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import TermosServico from '../components/TermosServico';
import SuccessRegisterModal from '../components/SuccessRegisterModal';
import axios from 'axios';

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [CPF, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState("");
  const [aceite, setAceite] = useState(false);
  const [showTermosModal, setTermosModal] = useState(false);
  const [showSuccessModal, setSuccessModal] = useState(false);

  const handleCadastro = async (e) => {
    e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/usuario/cadastroEstabelecimento", { email, senha, CPF, telefone, endereco, nomeEstabelecimento, aceite });

            if (response.status === 201){
              setSuccessModal(true);
            }
        } catch (error) {
            alert("Erro ao fazer Cadastro: " + (error.response?.data?.message || error.message));
        }
  }

  return (
    <div className='cadastro-form'>
        <img src={logo} />
        <h2>Cadastre-se já!</h2>
        <p>Basta fornecer os dados solicitados e concordar com nossos termos de serviço!</p>
        <form onSubmit={handleCadastro} className="">
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className=""
                    required
                />
                <br />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)}
                    className="" 
                    required
                />
                <br />
                <input 
                    type="text" 
                    placeholder="CPF ex: 12345678910" 
                    value={CPF} 
                    onChange={(e) => setCPF(e.target.value)}
                    className="" 
                    required
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Telefone ex: DDD 99999-9999" 
                    value={telefone} 
                    onChange={(e) => setTelefone(e.target.value)}
                    className="" 
                    required
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Endereço" 
                    value={endereco} 
                    onChange={(e) => setEndereco(e.target.value)}
                    className="" 
                    required
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Nome do estabelecimento" 
                    value={nomeEstabelecimento} 
                    onChange={(e) => setNomeEstabelecimento(e.target.value)}
                    className="" 
                    required
                />
                <br />
                <input 
                    type="checkbox" 
                    id='aceite'
                    checked={aceite}
                    onChange={() => setAceite(!aceite)}
                    className="" 
                    required
                />
                <label htmlFor="aceite">Concordo com os <button onClick={() => setTermosModal(true)}>Termos de Serviço</button></label>
                <br />
                <button type="submit" className="">Cadastrar</button>
                <Link to="/login" className="">Já tem conta? Login</Link>
          </form>

          {showTermosModal && (
            <TermosServico
              onClose={() => setTermosModal(false)}
            />
          )}

          {showSuccessModal && (
            <SuccessRegisterModal />
          )}

    </div>
  )
}

export default Cadastro