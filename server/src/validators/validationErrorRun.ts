import { NextFunction, Request, Response } from "express";
import {validationResult} from 'express-validator'
import { errorResponseHandler } from "../helpers/responseHandler";

/**
 * Validation error result from the validator
 * 
 * @param req :Request
 * @param res :Response
 * @param next :Next Function
 * @returns :JSON data
 */
const validationErrorResult = (req:Request,res:Response,next:NextFunction) => {
    try {
        const result = validationResult(req)
        if(!result.isEmpty()){
            return errorResponseHandler(res,422,result.array()[0].msg)
        }
        return next()
    } catch (error) {
        next(error)
    }
}

export default validationErrorResult