const Category = require('../models/categoryModel');

exports.testFunction = (req, res) => {
    res.send('this is from  the category controller');
}

// to post category
exports.postCategory = async (req, res) => {
    let category = new Category({
        category_name: req.body.category_name // you can use any variable name but for easiness we use the same name
    });
    // check for unique data
    Category.findOne({ category_name: category.category_name })
        .then(async categories => {
            if (categories) {
                return res.status(400).json({ error: 'category name already exists in database' });
            } else {
                category = await category.save();

                if (!category) {
                    return res.status(500).json({ error: 'something went wrong, check your data format' });
                }
                res.send(category);
            }
        })
        .catch(err => res.status(500).json({ error: err }))
}

// to show the list of categories
exports.getCategoryList = async (req, res) => {
    const category = await Category.find();
    if (!category) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(category);
}

// to show a category and its details
exports.getCategoryById = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(category);
}

exports.updateCategoryById = async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,
        {
            category_name: req.body.category_name
        },
        { new: true } // show us the updated result once it is updated
    );
    if (!category) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(category);
}

exports.deleteCategoryById = (req, res) => {
    Category.findByIdAndRemove(req.params.id)
        .then(category => {
            if (!category) {
                return res.status(403).json({ error: "category id not found" })
            }
            else {
                return res.status(200).json({ message: 'category deleted' })
            }
        })
        .catch(err => {
            return res.status(500).json({ error: err })
        })
}