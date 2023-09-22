import { Response, Request } from "express";
import connection from "../database/connections";
import { CreateOrdersResponse, TPizza } from './../models/pizzas';

export const createOrders = async (req: Request, res: Response) => {
  const errorCode = 400;
  try {
    const { id_cliente, pizzas } = req.body;

    if (!id_cliente || !pizzas ) {
      throw new Error("Parâmetros inválidos para criar o pedido.");
    }

    const [orderId] = await connection("pedidos").insert({
      fk_client: id_cliente, 
    });

    const response: CreateOrdersResponse = { orderId };
    res.status(201).send(response);
  } catch (error:any) {
    res.status(errorCode).send({ message: "Erro ao criar o pedido", error: error.message });
  }
};