import { NotFoundError } from "../helpers/apiErrors";
import { Category, categoryDocument } from "../models/category";

/**
 * Create category in the DB
 * @param category -categoryDocument
 * @returns - a category document
 */
const createCategory = async(category:categoryDocument):Promise<categoryDocument> =>{
    return category.save()
}

/**
 * Updating a category based on category id and some parameters
 * @param id :string
 * @param category :partial categoryDocument
 * @param option :Other options 
 * @returns :category document or null
 */
const updateCategory = async(
    id:string,
    category:Partial<categoryDocument>,
    option:Object):Promise<categoryDocument | null> =>{
    const update = await Category.findByIdAndUpdate(id,category,option)

    if(!update) throw new NotFoundError(`Category with ${id} is not found`)

    return update
}

/**
 * Deleting a single category based on category id
 * @param id :string
 * @returns deleted category document
 */
const deleteCategory =async(id:string):Promise<categoryDocument> =>{
    const deleteSingleCategory = await Category.findByIdAndDelete(id)
    if(!deleteSingleCategory) throw new NotFoundError(`Category with ${id} is not found`)
    return deleteSingleCategory
}

/**
 * Fetch single category based on category id
 * @param id :string
 * @returns category document or null
 */
const fetchSingleCategory = async(id:string):Promise<categoryDocument | null> =>{
    const singleCategory = await Category.findById(id)
    if(!singleCategory) throw new NotFoundError(`Category with ${id} is not found`)
    return singleCategory
}

/**
 * fetch categories
 * @returns an array of categories 
 */

const fetchCategories = async():Promise<categoryDocument[] | null> =>{
    const categories = await Category.find()
    if(!categories) throw new NotFoundError(`Categories not found`)
    return categories
}

export default{
    createCategory,
    updateCategory,
    deleteCategory,
    fetchSingleCategory,
    fetchCategories,
}