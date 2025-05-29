const mongoose = require('mongoose')
 const connectDB =async()=>{
    try{
        await mongoose.connect('mongodb+srv://vikraam17:Vikraam17@cluster0.lyfluwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/todo')
        console.log("MongoDb connected")
    }catch(err){
        console.log(err)
    }
 }
 module.exports = connectDB;