import { Response } from "express";

export const errorResponseHandler =(res:Response,statusCode:number,message:string) =>{
        return res.status(statusCode).json({
                ok:false,
                message
            })}

export const successResponseHandler =(res:Response,statusCode:number,data:object | null,message:string) =>{
        return res.status(statusCode).json({
            ok:true,
            message,
            data
        })
}