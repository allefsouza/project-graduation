import React from 'react';
import { Ul, P } from '../../pages/orders/styled';

const OrderCard = ({ order, style }) => {
  return (
    <Ul key={order.id_pedido}>
      <h3>Pedido {order.id_pedido}</h3>
      <h3>Nome:</h3>
      <p>{order.clientName}</p>
      <h3>Sabores:</h3>
      <ul>
        {order.pizzas.map((pizza) => (
          <p key={pizza.id}>{pizza.nome}</p>
        ))}
      </ul>
    </Ul>
  );
};

export default OrderCard;
