const OrderItem = require('../models/orderItemModel')
const Order = require('../models/orderModel')

// post order
exports.postOrder = async (req, res) => {
    // at 1st post to orderitem model and return the stored id of that orderitem
    const orderItemsIds = Promise.all(req.body.orderItems.map(async orderItemData => {
        // .map needs a function, which in this case is async orderItemData
        let newOrderItem = new OrderItem({
            quantity: orderItemData.quantity,
            product: orderItemData.product
        });

        newOrderItem = await newOrderItem.save();
        return newOrderItem._id;
    }))
    const orderItemIdResolve = await orderItemsIds // this will wait for above orderItemsIds  ,
    //  if we dont do this it (orderItemsIds) will say undefined 
    // calculate total price
    const totalAmount = await Promise.all(orderItemIdResolve.map(async orderId => {
        const itemOrder = await OrderItem.findById(orderId).populate('product', 'product_price');
        const totals = itemOrder.quantity * itemOrder.product.product_price;
        return totals; // this will give totals in array
        // eg: [400,1000,40] -> we will still need to add this amount
    }));

    const totalPrice = totalAmount.reduce((a, b) => a + b, 0);

    let order = new Order({
        orderItems: orderItemIdResolve,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        totalPrice: totalPrice,
        user: req.body.user
    })

    order = await order.save();
    if (!order) {
        return res.status(500).json({ error: 'failed to make order' })
    }
    res.send(order);
}

//order list
exports.orderList = async (req, res) => {
    const order = await Order.find()
        .populate('user', 'name')
        .sort({ createdAt: -1 });

    if (!order) {
        return res.status(400).json({ error: 'something went wrong, cannot find order' });

    }
    res.send(order);
}


// order details
exports.orderDetails = async (req, res) => {
    const order = await Order.findById(req.params.id)
        .populate('user', 'name')
        .populate({
            path: 'orderItems', populate: {
                path: 'product', populate: 'category'
            }
        });
    if (!order) {
        return res.status(400).json({ error: 'something went wrong, cannot find order' });

    }
    res.send(order);
}

// udpate order status
exports.updateStatus = async (req, res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
    );
    if (!order) {
        return res.status(400).json({ error: 'something went wrong, cannot find order' });

    }
    res.send(order);
}

//order list of specific user
exports.orderListOfAUser = async (req, res) => {
    const order = await Order.find({ user: req.params.userid })
        .populate({
            path: 'orderItems', populate: {
                path: 'product', populate: 'category'
            }
        });
    if (!order) {
        return res.status(400).json({ error: 'something went wrong, cannot find order' });

    }
    res.send(order);
}