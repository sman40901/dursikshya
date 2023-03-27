const Category = require('../models/categoryModel');


exports.testFunction = (req, res) => {
    res.send("this is from category control testFunction");
}

// to post category to insert category
exports.postCategory = async (req, res) => {
    let category = new Category({
        category_name: req.body.category_name
    });
    category = await category.save();
    if (!category) {
        return res.status(400).json({ error: 'provided category format is wrong' });
    }
    res.send(category);
};