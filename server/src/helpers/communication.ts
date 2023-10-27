// global imports 
import * as nodemailer from 'nodemailer'
import { communication } from '../config/ICommunication'

// local imports
import { SMTP_USER_NAME,SMTP_USER_PASS } from '../utils/secrets'
import logger from '../utils/logger'


/**
 * 
 * @param receivedEmail :type of communication
 */

export const sendEmailToUser = async(receivedEmail:communication):Promise<void> =>{
    try {
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 587,
            secure:false,
            auth:{
                user:SMTP_USER_NAME,
                pass:SMTP_USER_PASS
            }
        })

        const mailInfo ={
            from:SMTP_USER_NAME,
            to:receivedEmail.email,
            subject:receivedEmail.subject,
            body:receivedEmail.html
        }

        await transporter.sendMail(mailInfo,(error:unknown,info:nodemailer.SentMessageInfo)=>{
            if(error){
                logger.error('SMTP Message-I: ', error)
            }
            else{
                logger.info('Message sent: ', info.response)
            }
        })
    }
    catch (error) {
        logger.error('Error Message: ', error)
    }
}

