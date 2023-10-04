import { Request, Response } from 'express';
import connection from '../database/connections';

export const deleteOrder = async (req: Request, res: Response) => {
  const errorCode = 400;
  try {
    const { id_pedido } = req.params;

    if (!id_pedido) {
      throw new Error("ID do pedido não fornecido para exclusão.");
    }

    // Exclua as associações na tabela de pedido_pizza
    await connection('pedido_pizza').where({ id_pedido }).del();

    // Em seguida, exclua o pedido na tabela de pedidos
    await connection('pedidos').where({ id_pedido }).del();

    res.status(200).send({ message: 'Pedido excluído com sucesso.' });
  } catch (error:any) {
    res.status(errorCode).send({ message: error.message });
  }
};