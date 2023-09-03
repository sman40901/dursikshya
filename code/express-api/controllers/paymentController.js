const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// process payment
exports.processPayment = async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'npr',
        metadata: { integration_check: 'accept_a_payment' }
    });
    res.json({ client_secret: paymentIntent.client_secret })
}

// send stripe api key to front end
exports.sendStripeApi = async (req, res) => {
    res.json({
        stripeApiKey:process.env.STRIPE_API_KEY
    });
}