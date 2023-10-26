import {body} from 'express-validator'

const comment = [
    body('comment')
    .trim()
    .isEmpty()
    .withMessage('comment is missed'),
    body('nameOfPoster')
    .trim()
    .isEmpty()
    .withMessage('poster name is missed'),
    body('email')
    .trim()
    .isEmpty()
    .withMessage('email is missed')
    .isEmail()
    .withMessage('Email must be a valid email address.'),
    body('postId')
    .isEmpty()
    .withMessage('A comment missed a post')
]

export default comment