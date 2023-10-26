import { Response } from "express";

// a gateway for error response 
export const errorResponseHandler =(res:Response,statusCode:number,message:string) =>{
        return res.status(statusCode).json({
                ok:false,
                message
            })}
// a gateway for success response
export const successResponseHandler =(res:Response,statusCode:number,data:object | null,message:string) =>{
        return res.status(statusCode).json({
            ok:true,
            message,
            data
        })
}

