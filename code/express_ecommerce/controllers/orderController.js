const OrderItem = require('../models/order-itemModel');
const Order = require('../models/orderModel');

// post order
exports.postOrders = async (req, res) => {
    const orderItemIds = Promise.all(req.body.orderItems.map(async orderItem => {
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product
        })
        newOrderItem = await newOrderItem.save();
        // newOrderItem will be returned as array if there are multiple items
        return newOrderItem._id;
    })) // promise will wait till all the order request is back

    const orderItemIdResolve = await orderItemIds
    // we need to wait for the order Id from above promise
    //should be an array

    // calculating total price
    const totalAmount = await Promise.all(orderItemIdResolve.map(async orderId => {
        const itemOrder = await OrderItem.findById(orderId).populate('product', 'product_price');
        const total = itemOrder.quantity * itemOrder.product.product_price;
        return total;
        // total will be returned as array if there are multiple items
    }))

    const TotalPrice = totalAmount.reduce((acc, currval) => acc + currval, 0);
    // all values needs to be reduced  array in which is returned by total array

    let order = new Order({
        orderItems: orderItemIdResolve,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        totalPrice: TotalPrice,
        user: req.body.user
    })

    order = await order.save();
    if (!order) {
        return res.status(500).json({ error: 'somethine went wrong' });
    }
    res.send(order);
}

// order list
exports.orderList = async (req, res) => {
    const order = await Order.find()
        .populate('user', 'name')
        .sort({ createdAt: -1 })

    if (!order) {
        return res.status(400).json({ error: 'something went wrong' })
    }
    res.send(order)
}

exports.orderDetails = async (req, res) => {
    const order = await Order.findById(req.params.id)
        .populate('user', 'name')
        .populate({
            path: 'orderItems', populate: {
                path: 'product', populate: 'category'
            }
        });
    if (!order) {
        return res.status(400).json({ error: 'id not found' });
    }
    res.send(order);
}