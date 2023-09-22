import { Response, Request } from "express";
import connection from "../database/connections";

export const createClient = async (req: Request, res: Response) => {
  const errorCode = 400;
  try {
    const { name, phone, payment, address, number } = req.body; 

    if (!name || !address || !phone || !number || !payment) {
      throw new Error("Cliente inválido");
    }

    await connection("clientes").insert({ name, address, phone, number, payment }); 

    res.status(201).send("Cliente criado com sucesso!"); 
  } catch (error:any) {
    res.status(errorCode).send({ message: error.message });
  }
};