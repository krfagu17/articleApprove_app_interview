import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


import authRoute from'./routes/authRoute.js'
import mongooseConnect from './db/mongooseConnect.js';
dotenv.config()

const app = express();


app.use(cors());
app.use(express.json());
app.use('/auth/api',authRoute);

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(5000,()=>{
    mongooseConnect();
    console.log('Server is running on port 5000');
})

// /api/index.js
export default app;