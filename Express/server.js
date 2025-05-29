const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const router = require('./routers/egRoutes')
const app=express();
connectDB();
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);   
})