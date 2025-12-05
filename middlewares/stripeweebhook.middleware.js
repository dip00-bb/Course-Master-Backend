

import { raw, Router } from "express";
import { stripe } from "../config/stripe.js";
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const router = Router();

router.post('/webhook',  raw({type: 'application/json'}), async (req, res) => {

    const sig = req.headers['stripe-signature'];
    console.log("signature",sig)
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        console.log("body",req.body)
    } catch (err) {
        console.error('⚠️ Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle different event types
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        try {
            const userMetadata = session.metadata;

            console.log(userMetadata)

        } catch (dbError) {
            console.error('Database Error:', dbError.message);

        }
    }


    res.status(200).json({ received: true });
});

export default router