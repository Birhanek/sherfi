import {body} from 'express-validator'

const category = [
    body('name')
    .trim()
    .isEmpty()
    .withMessage('name of category is missed')
]

export default category