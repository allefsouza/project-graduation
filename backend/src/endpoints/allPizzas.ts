import { Response, Request } from "express";
import connection from "../database/connections";

export const getAllPizzas = async(req:Request, res:Response)=>{
    let errorCode = 400;
    try{
        const pizzas = await connection.select("*").from("pizzas");
        res.status(200).send(pizzas)
        
    }catch(error:any){
        res.status(errorCode).send({message:error.message})
    }
}