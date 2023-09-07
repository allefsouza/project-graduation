import { Response, Request } from "express";
import connection from "../database/connections";

export const getAllPrices = async(req:Request, res:Response)=>{
    let errorCode = 400;
    try{
        const prices = await connection.select("*").from("Prices");
        res.status(200).send(prices)
        
    }catch(error:any){
        res.status(errorCode).send({message:error.message})
    }
}