import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderOthersPage from '../../components/headerOthersPage';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersResponse = await axios.get('http://localhost:3003/allorders'); // Endpoint que retorna os pedidos

        // Para cada pedido, vamos buscar informações adicionais do cliente e dos sabores
        const ordersWithDetails = await Promise.all(
          ordersResponse.data.map(async (order) => {
            const clientResponse = await axios.get(`http://localhost:3003/allclients/${order.fk_client}`);
            const pizzasResponse = await axios.get(`http://localhost:3003/allpizzas/${order.id_pedido}`);
            
            // Suponhamos que a API retorne os sabores como um array em pizzasResponse.data.pizzas
            const pizzas = pizzasResponse.data.pizzas || [];

            return {
              ...order,
              clientName: clientResponse.data.name,
              pizzas: pizzas
            };
          })
        );

        setOrders(ordersWithDetails); // Atualize o estado com os pedidos e suas informações detalhadas
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <HeaderOthersPage title="Pedidos" />
      <ul>
        {orders.map((order) => (
          <li key={order.id_pedido}>
            <h3>Pedido ID: {order.id_pedido}</h3>
            <p>Cliente: {order.clientName}</p>
            <p>Sabores:</p>
            <ul>
            {order.pizzas.map((pizza) => (
  <li key={pizza.id}>{pizza.nome}</li>
))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
