// import { Response, Request } from "express";
// import connection from "../database/connections";
// import { CreateOrdersResponse, TPizza } from './../models/pizzas';

// export const createOrders = async (req: Request, res: Response) => {
//   const errorCode = 400;
//   try {
//     const { id_cliente, pizzas } = req.body;
//     console.log('Dados recebidos do cliente:', req.body);

//     if (!id_cliente || !pizzas ) {
//       throw new Error("Parâmetros inválidos para criar o pedido.");
//     }

//     const [orderId] = await connection("pedidos").insert({
//       fk_client: id_cliente, 
//     });

//     const response: CreateOrdersResponse = { orderId };
//     res.status(201).send(response);
//   } catch (error:any) {
//     res.status(errorCode).send({ message: "Erro ao criar o pedido", error: error.message });
//   }
// };
import { Response, Request } from "express";
import connection from "../database/connections";
import { CreateOrdersResponse } from './../models/pizzas';

export const createOrders = async (req: Request, res: Response) => {
  const errorCode = 400;

  try {
    const { id_cliente, pizzas } = req.body;

    if (!id_cliente || !pizzas || !Array.isArray(pizzas) || pizzas.length === 0) {
      throw new Error("Parâmetros inválidos para criar o pedido.");
    }

    // Criar o pedido e obter seu ID
    const [orderId] = await connection("pedidos").insert({
      fk_client: id_cliente,
    });

    // Associar cada pizza ao pedido na tabela de associação
    const pedidoPizzaEntries = pizzas.map((pizza: any) => ({
      id_pedido: orderId,
      id_pizza: pizza.id,
    }));

    await connection("pedido_pizza").insert(pedidoPizzaEntries);

    const response: CreateOrdersResponse = { orderId };
    res.status(201).send(response);
  } catch (error: any) {
    res.status(errorCode).send({ message: "Erro ao criar o pedido", error: error.message });
  }
};

