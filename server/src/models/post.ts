// contains title, slugify, description(main article),author,image
import { Document,Schema,model } from "mongoose";

export type postDocument = Document &{
    title:string,
    slug:string,
    description:string,
    author:string,
    category:string,
    photo:string
}

export const postSchema = new Schema({
    title:{
        type:String,
        trim:true,
        required:[true,'post is required']
    },
    slug:{
        type:String,
        required:[true,'slug is required']
    },
    description:{
        type:String,
        required:[true,'description is required']
    },
    author:{
        type:Schema.Types.ObjectId,
        required:[true,'each post must have an author']
    },
    category:{
        type:Schema.Types.ObjectId,
        required:[true,`a post must have a category`]
    },
    photo:{
        type:String,
        default:'public/image/book/harry potter.jpg'
    }
},{
    timestamps:true
})

export const Post = model<postDocument>('Posts',postSchema)