import {body} from 'express-validator'

const authorLogin = [
    body('email')
    .trim()
    .isEmpty()
    .withMessage('Email is missed')
    .isEmail()
    .withMessage('Email must be a valid email address'),
    body('password')
    .trim()
    .isEmpty()
    .withMessage('Password is missed')
    .isLength({min:6})
    .withMessage('Minimum length of password is 6')
]

export default authorLogin