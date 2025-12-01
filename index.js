import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
const PORT = process.env.PORT || 5000;


const app = express()

app.use(express.json())
app.use(cookieParser())


app.use(cors())


app.get('/', (req, res) => {
    res.send("Hello World")
})




const startServer=async ()=>{
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT,()=>console.log("Server Running On:",PORT))
};

startServer()
