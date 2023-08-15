const Product = require('../models/productModel');

// to post product
exports.postProduct = async (req, res) => {
    let products = new Product({
        product_name: req.body.product_name, // you can use any variable name but for easiness we use the same name
        product_price:req.body.product_price,
        countInStock:req.body.countInStock,
        product_description:req.body.product_description,
        product_image:req.body.product_image,
        category:req.body.Category
    });
    // check for unique data
    Product.findOne({ product_name: product.product_name })
        .then(async prod => {
            if (prod) {
                return res.status(400).json({ error: 'product name already exists in database' });
            } else {
                product = await product.save();

                if (!product) {
                    return res.status(400).json({ error: 'something went wrong, check your data format' });
                }
                res.send(product);
            }
        })
        .catch(err => res.status(500).json({ error: err }))
}