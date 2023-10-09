import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderOthersPage from "../../components/headerOthersPage";
import Footer from "../../components/footer/footer";
import { BoxOrders, Ul } from "./styled";
import OrderCard from "../../components/ordersCard";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersResponse = await axios.get(
          "https://project-graduation-backend.vercel.app/allorders"
        );

        const ordersWithDetails = await Promise.all(
          ordersResponse.data.map(async (order) => {
            const clientResponse = await axios.get(
              `https://project-graduation-backend.vercel.app/allclients/${order.fk_client}`
            );
            const pizzasResponse = await axios.get(
              `https://project-graduation-backend.vercel.app/allorders/${order.id_pedido}`
            ); // Endpoint para buscar as pizzas associadas a um pedido

            const pizzas = pizzasResponse.data.map((pizza) => ({
              id: pizza.id_pizza,
              nome: pizza.nome,
              preco: pizza.preco,
              // outras informações das pizzas se necessário
            }));

            return {
              ...order,
              clientName: clientResponse.data.name,
              pizzas: pizzas,
            };
          })
        );

        setOrders(ordersWithDetails);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <HeaderOthersPage title="Pedidos" />
      <BoxOrders>
        <div>
          {orders.map((order) => (
            <OrderCard order={order} key={order.id_pedido} />
          ))}
        </div>
      </BoxOrders>
      <Footer />
    </div>
  );
};

export default Orders;
