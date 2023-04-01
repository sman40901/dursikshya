const { check, validationResult } = require('express-validator');

exports.categoryValidation = [
    check('category_name', 'category is mandatory').notEmpty()
        .isLength({ min: 3 }).withMessage('category name must be at least 3 characters')
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