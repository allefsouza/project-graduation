import { Response, Request } from 'express';
import connection from '../database/connections';

// Função para buscar cliente por ID
const buscarClientePorId = async (idCliente: number) => {
  const cliente = await connection.select('*').from('clientes').where({ id_cliente: idCliente }).first();
  return cliente;
};

export const getAllClients = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id_cliente } = req.params;

    if (id_cliente) {
      const cliente = await buscarClientePorId(parseInt(id_cliente));
      if (cliente) {
        res.status(200).send(cliente);
      } else {
        res.status(404).send({ message: 'Cliente não encontrado' });
      }
    } else {
      const clients = await connection.select('*').from('clientes');
      res.status(200).send(clients);
    }
  } catch (error:any) {
    res.status(errorCode).send({ message: error.message });
  }
};
