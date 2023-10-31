import { NotFoundError } from "../helpers/apiErrors";
import { Author, AuthorDocument } from "../models/author";

/**
 * creating an author/user on our site
 * @param author :@type AuthorDocument - information about an author
 * @returns :document we have saved it
 */
const createAuthor = async(author:AuthorDocument):Promise<AuthorDocument> =>{
    return await author.save()
}

/**
 * Updating an author data
 * @param id - string
 * @param author - Partial of Author Document
 * @param option - Other options
 * @returns - Author document or null
 */
const updateAuthor = async(
    id:string, 
    author:Partial<AuthorDocument>,
    option:Object):Promise<AuthorDocument | null> =>{
    const updated = await Author.findByIdAndUpdate(id,author,option)
    if(!updated) throw new NotFoundError(`An author with ${id} is not found`)

    return updated
}

/**
 * Deleting an author
 * @param id :string
 * @returns deleted author Document or null
 */
const deleteAuthor = async(id:string):Promise<AuthorDocument | null> =>{
    const removed = await Author.findByIdAndDelete(id)
    if(!removed) throw new NotFoundError(`An author with ${id} is not found`)
    return removed
}

/**
 * fetching an author or user
 * @param id :string
 * @returns Author document or null
 */

const getSingleAuthor = async(id:string):Promise<AuthorDocument | null>=>{
    const singleAuthor = await Author.findById(id)
    if(!singleAuthor) throw new NotFoundError(`An author with ${id} is not found`)
    return singleAuthor
}

/**
 * Fetch authors
 * @returns an array of authors/users or null
 */

const fetchAuthors = async():Promise<AuthorDocument[] | null> =>{
    const authors = await Author.find()
    if(!authors) throw new NotFoundError(`Data of authors not found`)
    return authors
}

export default {
    createAuthor,
    updateAuthor,
    deleteAuthor,
    getSingleAuthor,
    fetchAuthors,
}