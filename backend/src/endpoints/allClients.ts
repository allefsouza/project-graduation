import { Response, Request } from "express";
import connection from "../database/connections";

export const GetAllClients = async(req:Request, res:Response)=>{
    let errorCode = 400;
    try{
        const clients = await connection.select("*").from("clientes_pizza");
        res.status(200).send(clients)
        
    }catch(error:any){
        res.status(errorCode).send({message:error.message})
    }
}