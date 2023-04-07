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
    }))

    const TotalPrice = totalAmount.reduce((acc, currval) => acc + currval, 0);
    // all values from array in which is returned by total array

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