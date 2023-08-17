const { check, validationResult } = require('express-validator');

exports.categoryValidation = [
    check('category_name', 'category is required')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('category name must be at least 3 characters')
]

exports.productValidation = [
    check('product_name', 'product is required')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('product name must be at least 3 characters'),
    check('product_price', 'price is required')
        .isNumeric()

        .withMessage('price must be numeric value'),
    check('countInStock', 'stock count is required')
        .isNumeric()

        .withMessage('stock count must be numeric value'),
    check('product_description', 'description is required')
        .isLength({ min: 20 })
        .notEmpty()
        .withMessage('fill in the description'),
    check('category', 'category is required')
        .notEmpty()
]


exports.validation = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        next(); // if there is no error then carry on next operation, for example post
    } else {
        return res.status(400).json({ error: errors.array()[0] });
    }
}