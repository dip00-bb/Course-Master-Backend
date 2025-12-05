import { stripe } from "../config/stripe.js";

export async function createStripePayment(data) {
    try {

        const customer = await stripe.customers.create({
            email: '',
            name: data.name,
            address: {
                city: "Dhaka",
                country: "BD",
                line1: "N/A",
                postal_code: "1000",
                state: "Dhaka",
            },
        });

        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            customer: customer.id,
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        product_data: {
                            name: data.course,
                        },
                        currency: "bdt",
                        unit_amount: Math.round(data.price * 100), // Ensure integer
                    },
                },
            ],
            metadata: {
                userId: data?.customerEmail,
                name: data?.name,
                amountPaid: data?.amountPaid,
            },
            success_url: `https://blog-website-724fe.web.app/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `https://blog-website-724fe.web.app/payment-cancel`,
        });

        return {
            success: true,
            url: checkoutSession.url
        }
    } catch (error) {
        console.error("Stripe Error:", error);
        return {
            sucess: false,
            message: "Something is went wrong"
        }
    }
}