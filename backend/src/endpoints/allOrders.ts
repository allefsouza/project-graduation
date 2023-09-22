import { Request, Response } from 'express';
import connection from '../database/connections';

export const getAllOrders = async(req:Request, res:Response)=>{
    let errorCode = 400;
    try{
        const orders = await connection.select("*").from("pedidos");
        res.status(200).send(orders)
        
    }catch(error:any){
        res.status(errorCode).send({message:error.message})
    }
}