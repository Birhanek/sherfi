import dotenv from 'dotenv'
import fs from 'fs'

import logger from './logger'

if(fs.existsSync('.env')){
    logger.debug('Using .env file to supply config environment variables')
    dotenv.config({path:'.env'})
}
else{
    logger.debug('Using .env.example file to supply config environment variables')
    dotenv.config({path:'.env.example'}) // you can delete this after you create your own .env file!
}

export const ENVIRONMENT = process.env.NODE_ENV
const production = ENVIRONMENT === 'production' // Anything else is treated as 'dev'

export const MONGODB_URL = process.env['MONGODB_URL'] as string
export const CLIENT_URL = (process.env['CLIENT_URL'] as string)  || 'http://127.0.0.1:3000'

export const SMTP_USER_NAME = process.env['SMTP_USER_NAME'] as string
export const SMTP_USER_PASS = process.env['SMTP_USER_PASS'] as string

if(!CLIENT_URL){
    logger.error('No client secret. Set CLIENT_URL environment variable.')
  process.exit(1)
}

if(!MONGODB_URL){
    if(production){
        logger.error('No mongo connection string. Set MONGODB_URI environment variable.')
    }else{
        logger.error('No mongo connection string. Set MONGODB_URI_LOCAL environment variable.')
    }
    process.exit(1)
}