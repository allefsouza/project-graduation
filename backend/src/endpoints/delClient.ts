import { Request, Response } from "express";
import connection from "../database/connections";

export const deleteCliente = async (req: Request, res: Response) => {
  const { id_cliente } = req.params;

  try {
    // Verifique se o cliente existe antes de tentar excluí-lo
    const cliente = await connection("clientes").where({ id_cliente }).first();

    if (!cliente) {
      return res.status(404).send("Cliente não encontrado");
    }

    await connection("clientes").where({ id_cliente }).del();

    return res.status(200).send("Cliente excluído com sucesso");
  } catch (error) {
     res.status(500).send("Erro ao excluir o cliente");
  }
};