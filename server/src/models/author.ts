// An author contains Name, Email, Username(@Email), password, title, profile image
import { Document, Schema, model } from "mongoose";

// An author document that helps to structure the Author schema
export type AuthorDocument = Document & {
    firstName:string
    lastName:string
    email:string
    userName:string
    password:string
    title:string
    photo:string
    aboutMe:string
    isVerified:boolean
}
// validation for authors before they saved to the database
export const authorSchema = new Schema({
    firstName:{
        type:String,
        minLength:[2,'Name should greater than 2 character'],
        trim:true,
        maxLength:[31, 'Name should not greater than 31 character'],
        required:[true, 'first name is required']
    },
    lastName:{
        type:String,
        minLength:[2,'Name should greater than 2 character'],
        trim:true,
        maxLength:[31, 'Name should not greater than 31 character'],
        required:[true, 'last name is required']
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        validate:{
            validator:(v:string) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            message: 'Please enter valid email',
        },
        required:[true,'Email address is required']
    },
    userName:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:[true,'Username is required']
    },
    password:{
        type:String,
        minLength: [6, 'minimum length of password is 6'],
        maxLength: [120, 'maximum length of password is 120'],
        validate:{
            validator:(v:string) => {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,120}$/.test(v)
            }
        },
        required:[true,'password is required']
    },
    title:{
        type:String
    },
    aboutMe:{
        type:String,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    photo:{
        type:String,
        default:'public/image/users/UnitedKingdom.png',
    }
})

// Author is the data model
export const Author = model<AuthorDocument>('Authors',authorSchema)