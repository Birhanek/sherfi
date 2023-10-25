// contains name, slugify
import { Document, Schema,model } from "mongoose"
export type categoryDocument = Document & {
    name:string
    slugify:string
}

export const categorySchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:[true,'name of category is required']
    },
    slug:{
        type:String,
        required:[true,'slug is required']
    }
},{
    timestamps:true
})

export const Category = model<categoryDocument>('Category',categorySchema)