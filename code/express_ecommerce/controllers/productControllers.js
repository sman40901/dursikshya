const Category = require('../models/categoryModel');
const Product = require('../models/productModel');

//to show all category
exports.productPost = async (req, res) => {
    let product = new Product({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        countInStock: req.body.countInStock,
        product_description: req.body.product_description,
        // product_image: req.body.product_image,
        product_image: req.file.path,
        category: req.body.category
    })
    product = await product.save();
    if (!product) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(product);
}

//to show all products
exports.productList = async (req, res) => {
    const product = await Product.find()
        .populate('category', 'category_name') // inner join using category forieng key
        // .sort(createdAt); 
    // if (req.params.order) {
    //     if (req.params.order == 'asc') {
    //         console.log("product ascending");
    //         product.sort((a, b) => {
    //             return a.createdAt - b.createdAt;
    //         })
    //     }
    //     if (req.params.order == 'desc') {
    //         console.log("product descending");
    //         product.sort((a, b) => {
    //             return b.createdAt - a.createdAt;
    //         })
    //     }
    // }
    if (!product) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(product);
}

//to show all products
exports.productId = async (req, res) => {
    const product = await Product.findById(req.params.id)
        .populate('category');
    if (!product) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(product);
}

exports.productUpdate = async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            countInStock: req.body.countInStock,
            product_description: req.body.product_description,
            product_image: req.body.product_image,
            category: req.body.category,
            product_rating: req.body.product_rating
        },
        {
            // this is to show updated value 
            new: true
        }
    );
    if (!product) {
        return res.status(400).json({ error: 'id not found' });
    }
    res.send(product);
}

exports.productDelete = (req, res) => {
    const product = Product.findByIdAndRemove(
        req.params.id
    )
        .then(product => {
            if (!product) {
                return res.status(403).json({ error: 'id not found' });
            }
            else {
                return res.status(200).json({ message: 'product deleted' })
            }
        })
        .catch(err => {
            return res.status(400).json({ error: 'id not found' })
        })
}