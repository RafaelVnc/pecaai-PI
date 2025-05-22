import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCardapioByIdEstabelecimento } from '../assets/database/cardapioArray';
import { getEstabelecimentoById } from '../assets/database/estabelecimentoArray';
import HeaderTop from '../components/HeaderTop';
import ItemList from '../components/ItemList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
import SuccessModal from '../components/SuccessModal';


const generateColorFromString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += (`00${value.toString(16)}`).slice(-2);
  }
  return color;
};

const formatarTelefone = (telefone) => {
  if (!telefone) return '';

  const cleaned = telefone.replace(/\D/g, ''); // remove tudo que não é número

  if (cleaned.length === 11) {
    // Formato: (99) 9XXXX-XXXX
    return cleaned.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2$3-$4');
  } else if (cleaned.length === 10) {
    // Formato: (99) XXXX-XXXX (sem o 9 inicial)
    return cleaned.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  } else {
    // Caso o número seja inválido ou incompleto
    return telefone;
  }
};

const Home = () => {
  
  const [estabelecimento, setEstabelecimento] = useState([]);
  useEffect(() => {
        const fetchData = async () => {
          const data = await getEstabelecimentoById();
          setEstabelecimento(data.estabelecimento);
        };
      
        fetchData();
  });

  const [cardapioArray, setCardapioArray] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const data = await getCardapioByIdEstabelecimento();
          setCardapioArray(data);
        };
    
        fetchData();
      }, []);

  const [mediaPreco, setMediaPreco] = useState(0);

      useEffect(() => {
        if (cardapioArray.length > 0) {
          const total = cardapioArray.reduce((acc, item) => acc + item.preco, 0);
          const media = total / cardapioArray.length;
          setMediaPreco(media);
        }
      }, [cardapioArray]);
  
      const [listaPedido, setListaPedido] = useState([]);

      const adicionarAoPedido = (item) => {
        setListaPedido((prevLista) => {
          const existente = prevLista.find((i) => i._id === item._id);
          if (existente) {
            return prevLista.map((i) =>
              i._id === item._id
                ? { ...i, quantidade: i.quantidade + 1, subtotal: (i.quantidade + 1) * i.preco }
                : i
            );
          } else {
            return [...prevLista, { ...item, quantidade: 1, subtotal: item.preco }];
          }
        });
      };
      
  const precoTotal = listaPedido.reduce((acc, item) => acc + item.subtotal, 0);
  
  const removerItem = (id) => {
    setListaPedido((prev) =>
      prev
        .map((item) => {
          if (item._id === id) {
            const novaQuantidade = item.quantidade - 1;
            if (novaQuantidade <= 0) return null;
            return {
              ...item,
              quantidade: novaQuantidade,
              subtotal: novaQuantidade * item.preco,
            };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const [showSuccessModal, setSuccessModal] = useState(false);

  const handleCriarPedido = async () => {
    const itens = listaPedido.map(item => ({
      _idItem: item._id,
      nome: item.nome,
      preco: item.preco,
      quantidade: item.quantidade,
      subtotal: item.subtotal
    }));
  
    const total = precoTotal;
  
    const pedido = {
      itens,
      total,
      status:"Recebido",
      idEstabelecimento: estabelecimento._id
    };
  
    try {
      const response = await axios.post('http://localhost:8000/pedidos/pedido', pedido);
      if (response.status === 201) setSuccessModal(true);
    } catch (error) {
      console.error('Erro ao criar pedido:', error.response?.data || error.message);
    }
  }

  const color = generateColorFromString(estabelecimento.nomeEstabelecimento || '');
  const entradaArray = cardapioArray.filter(i => i.categoria === "Entrada");
  const pratoPrincipalArray = cardapioArray.filter(i => i.categoria === "Prato principal");
  const bebidaArray = cardapioArray.filter(i => i.categoria === "Bebida");
  const sobremesaArray = cardapioArray.filter(i => i.categoria === "Sobremesa");
  
  if (!estabelecimento || !estabelecimento.nomeEstabelecimento) {
    return <p>Carregando estabelecimento...</p>;
  }

  return (
    <>
      <div className='establishment-page__main-container main'>
        <div className='establishment-page__info'>
            <h2 
            className='establishment-page__icon' 
            style={{ backgroundColor: color}}
            >
              {(estabelecimento.nomeEstabelecimento).charAt(0)}
            </h2>
          <div className='establishment-page__info-left'>
            <h1>{estabelecimento.nomeEstabelecimento}</h1>
            <p><FontAwesomeIcon icon={faWhatsapp} /> {formatarTelefone(estabelecimento.telefone)}</p>
            <p>{estabelecimento.endereco}</p>
          </div>
          <div className='establishment-page__info-right'>
            <p>Média de preço: R${mediaPreco.toFixed(2)}</p>
          </div>
        </div>
        <h3 className='establishment-page__titles'>Cardápio</h3>
        {
          cardapioArray.length > 0 ? (
            <div className='establishment-page__cardapio'>
              <ItemList categoria="Entrada" itensArray={entradaArray} isEstabelecimento={false} onAddItem={adicionarAoPedido}/>
              <ItemList categoria="Prato principal" itensArray={pratoPrincipalArray} isEstabelecimento={false} onAddItem={adicionarAoPedido}/>
              <ItemList categoria="Bebida" itensArray={bebidaArray} isEstabelecimento={false} onAddItem={adicionarAoPedido}/>
              <ItemList categoria="Sobremesa" itensArray={sobremesaArray} isEstabelecimento={false} onAddItem={adicionarAoPedido}/>
              {
                listaPedido.length > 0 &&(
                  <>
                    <h3 className="establishment-page__titles--full-width">Pedido</h3>
                    <div className='establishment-page__pedido-container'>
                      <ul className='establishment-page__pedido-list'>
                        {listaPedido.map((item) => (
                          <li key={item._id}>
                            • {item.nome} - {item.quantidade} x R${item.preco.toFixed(2)} = R${item.subtotal.toFixed(2)}
                            <button onClick={() => removerItem(item._id)} className='establishment-page__pedido-remove-btn'>
                              Remover 1
                            </button>
                          </li>
                        ))}
                      </ul>
                      <p className='establishment-page__pedido-total'>Total: R${precoTotal.toFixed(2)}</p>
                      <button onClick={handleCriarPedido} className='establishment-page__criar-pedido-btn'>Criar pedido</button>
                    </div>
                  </>
              )}
            </div>
          ) : (
            <p style={{ marginTop: '5rem', fontStyle: 'italic', fontSize:'1.7rem' , paddingBottom: '10rem', display:'flex', alignContent:'center', justifyContent:'center' }}>Nenhum item no cardápio deste estabelecimento!</p>
          )
        }
      </div>
      
      {showSuccessModal && (
        <SuccessModal isEstablishment={true}/>
      )}
    </>
  );
}

export default Home;