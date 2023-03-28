const Category = require('../models/categoryModel');


exports.testFunction = (req, res) => {
    res.send("this is from category control testFunction");
}

// to post category to insert category
exports.postCategory = async (req, res) => {
    let category = new Category({
        category_name: req.body.category_name
    });
    // to check if data already exists
    // Category.findOne({ category_name: category.category_name }, async (error, data) => {
    //     if (/*!error || */
    //         data == null) {
    //         category = await category.save();
    //         if (!category) {
    //             return res.status(400).json({ error: 'provided category format is wrong' });
    //         }
    //         res.send(category);
    //     }
    //     else {
    //         return res.status(400).json({ error: 'category must be unique, this already exists' })
    //     }
    // });
    Category.findOne({ category_name: category.category_name }) // finds element from database not in memory
        .then(async categories => {
            if (categories) {
                return res.status(400).json({ error: 'category must be unique, this already exists' })
            }
            else {
                category = await category.save();
                if (!category) {
                    return res.status(400).json({ error: 'provided category format is wrong' });
                }
                res.send(category);
            }
        })
        .catch(err => res.status(400).json({ error }))
    // category = await category.save();
    // if (!category) {
    //     return res.status(400).json({ error: 'provided category format is wrong' });
    // }
    // res.send(category);
};

//to show all category
exports.categoryList = async (req, res) => {
    const category = await Category.find();
    if (!category) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(category);
}

exports.categoryDetails = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return res.status(400).json({ error: 'id not found' });
    }
    res.send(category);
}

exports.categoryUpdate = async (req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            category_name: req.body.category_name
        },
        {
            // this is to show updated value 
            new:true
        }
    );
    if (!category) {
        return res.status(400).json({ error: 'id not found' });
    }
    res.send(category);
}

exports.categoryDelete =  (req, res) => {
    const category = Category.findByIdAndRemove(
        req.params.id
    )
    .then(category=>{
        if (!category) {
            return res.status(403).json({ error: 'id not found' });
        }
        else
        {
            return res.status(200).json({message:'category deleted'})
        }
    })
    .catch(err=>{
        return res.status(400).json({error:'id not found'})
    })
   
    // res.send(category);
}