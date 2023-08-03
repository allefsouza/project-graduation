import { Response, Request } from "express";
import connection from "../database/connections";
import { TPizzas } from "../models/pizzas";

export const createOrders = async(req:Request, res:Response)=>{
    let errorCode = 400;
    try{
        const fk_client = req.body.fk_client;
        const pizzas:TPizzas[] = req.body.pizzas
        
        if (!pizzas || !fk_client){
            throw new Error("Info body invalid")
        }

        await pizzas.forEach(async pizza => {
            await connection("pedidos").insert(
            {
            fk_client,
            data_pedido:new Date().toISOString().slice(0,10),
            fk_pizzas:pizza.id
            }
            )
        })
        res.status(200).send("Pedido criado com sucesso!")
    }catch(error:any){
        res.status(errorCode).send({message:error.message})
    }    
}        
