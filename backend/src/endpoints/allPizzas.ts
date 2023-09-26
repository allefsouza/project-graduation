import { Response, Request } from 'express';
import connection from '../database/connections';

// Função para buscar pizza por ID
const buscarPizzaPorId = async (idPizza: number) => {
  const pizza = await connection.select('*').from('pizzas').where({ id: idPizza }).first();
  return pizza;
};

export const getAllPizzas = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id } = req.params;

    if (id) {
      const pizza = await buscarPizzaPorId(parseInt(id));
      if (pizza) {
        res.status(200).send(pizza);
      } else {
        res.status(404).send({ message: 'Pizza não encontrada' });
      }
    } else {
      const pizzas = await connection.select('*').from('pizzas');
      res.status(200).send(pizzas);
    }
  } catch (error:any) {
    res.status(errorCode).send({ message: error.message });
  }
};
