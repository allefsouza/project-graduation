import { Response, Request } from "express";
import connection from "../database/connections";
import { CreateOrderRequest, CreateOrderResponse } from "../models/pizzas";

export const createOrders = async (req: Request, res: Response) => {
    const { fk_client, pizzas } = req.body as CreateOrderRequest;
  
    try {
      // Inserir o pedido no banco de dados e obter o ID do pedido
      const [orderId] = await connection("pedidos").insert({
        fk_client,
        // Você pode adicionar outros campos relacionados ao pedido aqui
      });
  
      // Associar as pizzas ao pedido
      const orderPizzas = pizzas.map((pizza) => ({
        fk_pedido: orderId,
        fk_pizza: pizza.id,
        // Você pode adicionar outros campos relacionados às pizzas aqui
      }));
  
      await connection("pedidos_pizzas").insert(orderPizzas);
  
      const response: CreateOrderResponse = { orderId };
      res.status(201).send(response);
    } catch (error: any) {
      res.status(500).send({ message: "Erro ao criar o pedido.", error: error.message });
    }
  };
