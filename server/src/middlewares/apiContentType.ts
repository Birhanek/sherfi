import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../helpers/apiErrors";

export default function(req:Request,res:Response,next:NextFunction){
    if((req.method === 'PUT' || req.method === 'POST' || req.method === 'PATCH') &&
    !(
    req.is('multipart/form-data') ||
    req.is('application/x-www-form-urlencoded') ||
    req.is('application/json'))){
        next(new BadRequestError('Request body must be of type json'))
    }
    else{
        next()
    }
}