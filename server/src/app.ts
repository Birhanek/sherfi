import express, { NextFunction } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import {} from 'dotenv'

// user defined imports
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

// setting the path of our environment
dotenv.config({path:'.env'})
const app = express()

//Express configuration
app.set('port',process.env.PORT)
app.use(morgan('dev'))

// Global middleware setting
app.use(apiContentType)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/public',express.static('public'))

//setup routers 


// Custom API error handler
app.use(apiErrorHandler)
export default app