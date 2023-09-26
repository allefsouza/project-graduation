import { Response, Request } from 'express';
import connection from '../database/connections';


const buscarPedidoPorId = async (idPedido: number) => {
  const pedido = await connection.select('*').from('pedidos').where({ id_pedido: idPedido }).first();
  return pedido;
};

export const getAllOrders = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id_pedido } = req.params;

    if (id_pedido) {
      const pedido = await buscarPedidoPorId(parseInt(id_pedido));
      if (pedido) {
        res.status(200).send(pedido);
      } else {
        res.status(404).send({ message: 'Pedido não encontrado' });
      }
    } else {
      const orders = await connection.select('*').from('pedidos');
      res.status(200).send(orders);
    }
  } catch (error:any) {
    res.status(errorCode).send({ message: error.message });
  }
};