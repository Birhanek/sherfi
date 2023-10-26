import {body} from 'express-validator'

const post = [
    body('title')
    .trim()
    .isEmpty()
    .withMessage('title of a post is missed'),
    body('description')
    .trim()
    .isEmpty()
    .withMessage('description of a post is missed'),
    body('author')
    .isEmpty()
    .withMessage('author is missed'),
    body('photo')
    .optional()
]

export default post