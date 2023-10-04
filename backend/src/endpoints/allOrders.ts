import { Response, Request } from 'express';
import connection from '../database/connections';


const buscarDetalhesPedidoPorId = async (idPedido: number) => {
  const pedido = await connection
    .select('pedido_pizza.*', 'pizzas.nome', 'pizzas.preco')
    .from('pedido_pizza')
    .innerJoin('pizzas', 'pedido_pizza.id_pizza', 'pizzas.id')
    .where('pedido_pizza.id_pedido', idPedido);
  return pedido;
};

export const getAllOrders = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id_pedido } = req.params;

    if (id_pedido) {
      const pedido = await buscarDetalhesPedidoPorId(parseInt(id_pedido));
      if (pedido.length > 0) {
        res.status(200).send(pedido);
      } else {
        res.status(404).send({ message: 'Pedido não encontrado' });
      }
    } else {
      const orders = await connection.select('*').from('pedidos');
      // Adicionamos os detalhes das pizzas associadas a cada pedido
      for (const order of orders) {
        order.pizzas = await buscarDetalhesPedidoPorId(order.id_pedido);
      }
      res.status(200).send(orders);
    }
  } catch (error:any) {
    res.status(errorCode).send({ message: error.message });
  }
};



