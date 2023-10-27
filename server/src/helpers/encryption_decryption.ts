import bcrypt from 'bcrypt'
import { BadRequestError } from './apiErrors'

const SaltRound = 10 // a number to generate rounds 

/**
 * 
 * @param plainText : string
 * @returns string or an error
 */

const encryption = async(plainText:string):Promise<string | Error> => {
    try {
        const cipher = await bcrypt.hash(plainText,SaltRound)
        return cipher
    } catch (error) {
        throw new BadRequestError(
            'Could not cipher the plain text',
                400,
                error
        )
    }
}

/**
 * 
 * @param cipher : string 
 * @param plainText :string accepted from the user
 * @returns boolean or error
 */

const decryption = async(cipher:string, plainText:string):Promise<boolean | Error> =>{
    try {
        const matched = await bcrypt.compare(plainText,cipher)
        return matched
    } catch (error) {
        throw new BadRequestError(
            'Value is not correct',
            400,
            error
        )
    }
}

export default{
    encryption,
    decryption
}