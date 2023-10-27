import { Response } from "express";

/**
 * Error response
 * @param res -- Response of type express
 * @param statusCode -- number
 * @param message -- string
 * @returns --json data
 */
export const errorResponseHandler =(res:Response,statusCode:number,message:string) =>{
        return res.status(statusCode).json({
                ok:false,
                message
            })}


/**
 * Response of success 
 * @param res --Response of type express
 * @param statusCode -- number
 * @param data -- object or null
 * @param message -- string
 * @returns -- json data
 */
export const successResponseHandler =(res:Response,statusCode:number,data:object | null,message:string) =>{
        return res.status(statusCode).json({
            ok:true,
            message,
            data
        })
}

