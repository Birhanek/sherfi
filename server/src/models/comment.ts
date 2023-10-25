// contains postId, comment, name of poster, email of poster
import { Document, Schema,SchemaType,model } from "mongoose"
export type commentDocument = Document & {
    comment:string,
    nameOfPoster:string,
    email:string,
    post:string
}

export const commentSchema = new Schema({
    comment:{
        type:String,
        trim:true,
        required:[true,'comment on post is required']
    },
    nameOfPoster:{
        type:String,
        required:[true,'name of commenter is required']
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        validate:{
            validator:(v:string) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            message:'please enter valid mail'
        },
        required:[true,'email is required']
    },
    post:{
        type:Schema.Types.ObjectId,
        ref: 'Posts',
        required:[true,'a comment must have a post']
    }
},{
    timestamps:true
})

export const Comment = model<commentDocument>('Comments',commentSchema)