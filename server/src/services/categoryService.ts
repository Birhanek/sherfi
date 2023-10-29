import { NotFoundError } from "../helpers/apiErrors";
import { Category, categoryDocument } from "../models/category";

/**
 * 
 * @param category -categoryDocument
 * @returns - a category document
 */
const createCategory = async(category:categoryDocument):Promise<categoryDocument> =>{
    return category.save()
}

/**
 * 
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

export default{
    createCategory,
    updateCategory
}