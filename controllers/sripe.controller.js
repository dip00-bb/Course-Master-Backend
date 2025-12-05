import { createStripePayment } from "../service/stripe.service.js";

export async function payment(req,res){
    const paymentInfo=req.body
    console.log(paymentInfo)
    const paymentDetails= await createStripePayment(paymentInfo)
    res.status(200).json({url:paymentDetails.url})
}