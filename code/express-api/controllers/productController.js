const Product = require('../models/productModel');
const Category = require('../models/categoryModel');
// const 

// to post product
exports.postProduct = async (req, res) => {
    let product = new Product({
        product_name: req.body.product_name, // you can use any variable name but for easiness we use the same name
        product_price: req.body.product_price,
        countInStock: req.body.countInStock,
        product_description: req.body.product_description,
        // product_image: req.body.product_image,
        product_image:req.file.path,
        category: req.body.category
    });

    product = await product.save()
    if (!product) {
        return res.status(400).json({ error: "error" })
    }
    res.send(product)

    // check for unique data
    // Product.findOne({ product_name: product.product_name })
    //     .then(async products => {
    //         if (products) {
    //             return res.status(400).json({ error: 'product name already exists in database' });
    //         } else {
    //             product = await product.save();

    //             if (!category) {
    //                 return res.status(500).json({ error: 'could not save data' });
    //             }
    //             res.send(product);
    //         }
    //     })
    //     .catch(err => res.status(500).json({ error: err }))
}

// to show the list of categories
exports.getProductList = async (req, res) => {
    const product = await Product.find()
        .populate('category', 'category_name');
    if (!product) {
        return res.status(500).json({ error: 'could not retrive data' });
    }
    res.send(product);
}

// to show a category and its details
exports.getProductById = async (req, res) => {
    const category = await Category.findById(req.params.id)
        .populate('category', 'category_name');
    if (!category) {
        return res.status(400).json({ error: 'could not find id :' });
    }
    res.send(category);
}


exports.updateProductById = async (req, res) => {
    const category = await Product.findByIdAndUpdate(req.params.id,
        {
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            countInStock: req.body.countInStock,
            product_description: req.body.product_description,
            // product_image: req.body.product_image,
            product_image:req.file.path,
            category: req.body.category
        },
        { new: true } // show us the updated result once it is updated
    );
    if (!category) {
        return res.status(500).json({ error: 'something went wrong' });
    }
    res.send(category);
}

exports.deleteProductById = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(product => {
            if (!product) {
                return res.status(403).json({ error: "product id not found" })
            }
            else {
                return res.status(200).json({ message: 'product deleted' })
            }
        })
        .catch(err => {
            return res.status(500).json({ error: err })
        })
}