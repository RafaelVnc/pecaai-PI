import React, { useEffect, useState } from 'react';
import { getPedidosArray } from '../assets/database/pedidosArray.js';
import ItemList from '../components/ItemList.jsx';
import OrderList from '../components/OrderList.jsx';

const Pedidos = () => {
  const [pedidoArray, setPedidoArray] = useState([]);

  const fetchData = async () => {
    const data = await getPedidosArray();
    setPedidoArray(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const recebidoArray = pedidoArray.filter(o => o.status === "Recebido");
  const emProducaoArray = pedidoArray.filter(o => o.status === "Em Produção");
  const concluidoArray = pedidoArray.filter(o => o.status === "Concluído");

  return (
    <div className='main'>
      <OrderList status={"Recebido"} orderArray={recebidoArray} nextStatus={"Em Produção"} refreshPedidos={fetchData}/>
      <OrderList status={"Em Produção"} orderArray={emProducaoArray} nextStatus={"Concluído"} refreshPedidos={fetchData}/>
      <OrderList status={"Concluído"} orderArray={concluidoArray} nextStatus={"Deletado"} refreshPedidos={fetchData}/>
    </div>
  );
}

export default Pedidos;