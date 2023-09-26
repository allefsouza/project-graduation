import { Response, Request } from "express";
import connection from "../database/connections";

export const createClient = async (req: Request, res: Response) => {
  const errorCode = 400;
  try {
    const { name, phone, payment, address, number } = req.body; 

    if (!name || !address || !phone || !number || !payment) {
      throw new Error("Cliente inválido");
    }

    const existingClient = await connection("clientes")
      .where("phone", phone)
      .first();

    if (existingClient) {
      throw new Error("Cliente com este número de telefone já existe.");
    }

    // Inserir o cliente e capturar o id inserido
    const [id] = await connection("clientes").insert({ name, address, phone, number, payment });

    // Retornar o id do cliente na resposta
    res.status(201).send({ id, message: "Cliente criado com sucesso!" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};