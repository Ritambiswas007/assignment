const express=require('express');
const mongoose=require('mongoose');
const { default: router } = require('./routes/user-routes');

const app=express();
app.use("/api/user",router)
mongoose.connect('mongodb+srv://Ritam007:Ritam007@cluster0.dazqgpa.mongodb.net/Blog?retryWrites=true&w=majority').then(()=>app.listen(5000)).then(()=>console.log("database connected")).catch((e)=>console.log(e));