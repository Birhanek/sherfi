import { NotFoundError } from "../helpers/apiErrors";
import { Author, AuthorDocument } from "../models/author";

/**
 * 
 * @param author :@type AuthorDocument - information about an author
 * @returns :document we have saved it
 */
const createAuthor = async(author:AuthorDocument):Promise<AuthorDocument> =>{
    return await author.save()
}

/**
 * 
 * @param id - string
 * @param author - Partial of Author Document
 * @param option - Other options
 * @returns - Author document or null
 */
const updateAuthor = async(id:string, author:Partial<AuthorDocument>, option:Object):Promise<AuthorDocument | null> =>{
    const updated = await Author.findByIdAndUpdate(id,author,option)
    if(!updated) throw new NotFoundError(`An author with ${id} is not found`)

    return updated
}


export default {
    createAuthor,
    updateAuthor
}