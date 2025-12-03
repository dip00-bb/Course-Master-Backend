import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;

import authRoute from './routes/auth.routes.js'
import adminRote from './routes/admin.route.js' 

const app = express()

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

const startServer = async () => {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log("Server Running On:", PORT))
};

startServer()
