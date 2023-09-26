import { Request, Response } from 'express';
import connection from '../database/connections';

export const deleteOrder = async (req: Request, res: Response) => {
  const { id_pedido } = req.params;
  try {
    const pedido = await connection('pedidos').where({ id_pedido }).first();

    if (!pedido) {
      return res.status(404).send('Pedido não encontrado');
    }

    await connection('pedidos').where({ id_pedido }).del();

    return res.status(200).send('Pedido excluído com sucesso');
  } catch (error) {
     res.status(500).send('Erro ao excluir o pedido');
  }
};
