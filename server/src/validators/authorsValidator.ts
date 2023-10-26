import { body } from "express-validator";

const author = [
    body('firstName')
    .isEmpty()
    .withMessage('first name is missed')
    .trim().isLength({min:2})
    .withMessage('first name length must >2 character')
    .isLength({max:120})
    .withMessage('first name length must < 120 character'),
    body('lastName')
    .isEmpty()
    .withMessage('last name is missed')
    .trim()
    .isLength({min:2})
    .withMessage('last name minimum length must >2 character')
    .isLength({max:120})
    .withMessage('last name maximum length must < 120 character'),
    body('email')
    .isEmpty()
    .withMessage('email is missed')
    .isEmail()
    .withMessage('Email must be a valid email address')
    .trim(),
    body('userName')
    .trim()
    .isEmpty()
    .withMessage('user name is missed'),
    body('password')
    .trim()
    .isEmpty()
    .withMessage('password is missed')
    .isLength({min:6})
    .withMessage('minimum length of password is 6'),
    body('title')
    .trim()
    .optional(),
    body('aboutMe')
    .trim()
    .optional(),
]

export default author
