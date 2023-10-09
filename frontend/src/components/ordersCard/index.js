import React from "react";
import { Ul, DivName, DivFlavors, DivOrder, DivSup } from "../../pages/orders/styled";

const OrderCard = ({ order, style }) => {
  return (
    <DivSup>
      <Ul key={order.id_pedido}>
        <DivOrder>
          <h1>Pedido {order.id_pedido}</h1>
        </DivOrder>
        <DivName>
          <h4>Nome:</h4>
          <p>{order.clientName}</p>
        </DivName>
        <DivFlavors>
          <h3>Sabores:</h3>
          <ul>
            {order.pizzas.map((pizza) => (
              <p key={pizza.id}>{pizza.nome}</p>
            ))}
          </ul>
        </DivFlavors>
      </Ul>
    </DivSup>
  );
};

export default OrderCard;
