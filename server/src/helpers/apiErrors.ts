export default class ApiError extends Error{
    constructor( readonly statusCode: number, readonly message:string, readonly source?: Error){
        super()
    }
}

// Not found error
export class NotFoundError extends ApiError{
    constructor(
        readonly message:string ="Not Found",
        readonly statusCode:number = 404,
        source?:Error|any){
        super(statusCode,message,source)
    }
}

// Forbidden Error
export class ForbiddenError extends ApiError{
    constructor(
        readonly message:string ="Forbidden",
        readonly statusCode:number = 403,
        source?:Error|any){
        super(statusCode,message,source)
    }
}

// Internal server error
export class InternalServerError extends ApiError {
    constructor(
        readonly message:string ="Internal server Error",
        readonly statusCode:number = 500,
        source?:Error|any){
        super(statusCode,message,source)
    }
}

// Unauthorized Error
export class UnauthorizedError extends ApiError {
    constructor(
      readonly message: string = 'Unauthorized Request',
      readonly statusCode: number = 401,
      source?: Error | any
    ) {
      super(statusCode, message, source)
    }
  }

// Bad request error
export class BadRequestError extends ApiError {
    constructor(
      readonly message: string = 'Bad Request',
      readonly statusCode: number = 400,
      source?: Error | any
    ) {
      super(statusCode, message, source)
    }
  }
  