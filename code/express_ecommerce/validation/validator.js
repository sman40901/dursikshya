const { check, validationResult } = require('express-validator');

exports.categoryValidation = [
    check('category_name', 'category is mandatory').notEmpty()
        .isLength({ min: 3 }).withMessage('category name must be at least 3 characters')
]

exports.productValidation = [
    check('product_name', 'product is mandatory')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('prodcut name must be at least 3 characters'),
    check('product_price', 'price is mandatory')
        .notEmpty()
        .isNumeric()
        // .isLength({ min: 3 })
        .withMessage('prodcut price must be numeric'),
    check('countInStock', 'stock is mandatory')
        .notEmpty()
        .isNumeric()
        // .isLength({ min: 3 })
        .withMessage('prodcut stock must be numeric'),
    check('product_description', 'description is mandatory')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('prodcut decription must be at least 3 characters'),
    check('category', 'category is mandatory')
        .notEmpty()
]

exports.userValidation = [
    check('name', 'name is mandatory').notEmpty()
        .isLength({ min: 3 }).withMessage('name must be at least 3 characters'),
    check('email', 'email is mandatory').notEmpty()
        .isEmail().withMessage('invalid email format.'),
    check('password', 'password is mandatory').notEmpty()
        .matches(/[a-z]/).withMessage('password must be at least one lowercase letter')
        .matches(/[A-z]/).withMessage('password must be at least one uppercase letter')
        .matches(/[0-9]/).withMessage('password must be at least one numeric value')
        .matches(/[@#$^&*/?!~._]/).withMessage('password must be at least one special character')
        .isLength({ min: 8 }).withMessage('name must be at least 8 characters')
]

exports.passwordValidation=[
    check('password', 'password is mandatory').notEmpty()
        .matches(/[a-z]/).withMessage('password must be at least one lowercase letter')
        .matches(/[A-z]/).withMessage('password must be at least one uppercase letter')
        .matches(/[0-9]/).withMessage('password must be at least one numeric value')
        .matches(/[@#$^&*/?!~._]/).withMessage('password must be at least one special character')
        .isLength({ min: 8 }).withMessage('name must be at least 8 characters')
]

exports.validation = (req, res, next) => {
    // next tells this function to goto next step
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        next();
    } else {
        return res.status(400).json({ error: errors.array()[0].msg })
    }

}