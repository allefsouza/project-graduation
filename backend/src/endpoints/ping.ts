import {Request, Response} from "express"

export const ping = async(req: Request, res: Response)=>{
    let errorCode = 404
    try{
        res.status(200).send("blabla!")
    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}

export default ping