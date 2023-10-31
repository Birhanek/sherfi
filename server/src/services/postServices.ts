import { NotAllowedError, NotFoundError } from "../helpers/apiErrors";
import { Post, postDocument } from "../models/post";


/**
 * Creating a post to DB
 * @param post :postDocument
 * @returns post document we have saved it
 */
const createPost =async (post:postDocument) => {
    return await post.save()
}

/**
 * Update a post based on Id
 * @param id :string
 * @param post :post document
 * @param option :option
 * @returns post document we updated
 */
const updatePost = async(
    id:string,
    post:Partial<postDocument>,
    option:object
    ):Promise<postDocument | null> =>{
        const updated = await Post.findByIdAndUpdate(id,post,option)
        if(!updated) throw new NotAllowedError(`A post with ${id} can't updated`)
        return updated
    }

/**
 * Deleting post with an id
 * @param id string
 * @returns a deleted post document or null
 */
const deletePost = async(id:string):Promise<postDocument | null> =>{
    const deleted = await Post.findByIdAndDelete(id)
    if(!deleted) throw new NotFoundError(`A post with ${id} is not deleted`)
    return deleted
}

/**
 * Fetch post by title of the post
 * @param title :string
 * @returns single post document or null
 */
const fetchSinglePostBySlug = async(title:string):Promise<postDocument | null> =>{
    const postBySlug = await Post.findOne({slug:title})
    if(!postBySlug) throw new NotFoundError(`a post with ${title.replace("-"," ")} not found`) 
    return postBySlug
}

/**
 * Fetch post by category
 * @param cat :string
 * @returns an array of post by category
 */
const fetchPostByCategory = async(cat:string):Promise<postDocument[] | null> =>{
    const postByCategory = await Post.find({category:cat}).populate('Categories')
    if(!postByCategory) throw new NotFoundError(`Post by category is not found`)
    return postByCategory

}
export default{
    createPost,
    updatePost,
    deletePost,
    fetchSinglePostBySlug,
    fetchPostByCategory
}