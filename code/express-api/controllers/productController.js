const Product = require('../models/productModel');

// to post product
exports.postProduct = async (req, res) => {
    let product = new Product({
        product_name: req.body.product_name, // you can use any variable name but for easiness we use the same name
        product_price:req.body.product_price,
        countInStock:req.body.countInStock,
        product_description:req.body.product_description,
        product_image:req.body.product_image,
        category:req.body.Category
    });

    product=await product.save()
    if(!product){
        return res.status(400).json({error:"error"})
    }
    res.send (product)
}

// to show the list of categories
exports.getProductList = async (req, res) => {
    const product = await Product.find();
    if (!product) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(product);
}

// to show a category and its details
exports.getCategoryById = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(category);
}
