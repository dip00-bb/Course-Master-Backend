import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;

import authRoute from './routes/auth.routes.js'
import adminRote from './routes/admin.route.js'
import homeCourses from './routes/course.routes.js'
import payment from './routes/stripe.route.js'
import weebhook from './middlewares/stripeweebhook.middleware.js'

const app = express()

app.use('/api/checkout', weebhook)

app.use(express.json())
app.use(cookieParser())



app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))


app.get('/', (req, res) => {
    res.send("Hello World")
})


app.use('/api/auth', authRoute)
app.use('/api/admin', adminRote)
app.use('/api/courses', homeCourses)
app.use('/api/payment', payment)



const startServer = async () => {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log("Server Running On:", PORT))
};

startServer()
