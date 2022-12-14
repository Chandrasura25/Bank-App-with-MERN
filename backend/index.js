const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
const mongoose = require('mongoose')
app.use(express.urlencoded({extended:true,limit:'50mb'}))
app.use(express.json({limit:'50mb'}))
require('dotenv').config()
const PORT = process.env.PORT||2022
const URI = process.env.MONGO_URI
const userRouter = require('./routes/user.route.js')
app.use('/asuraBank',userRouter)

mongoose.connect(URI,(err)=>{
    if(err){
        console.log(err)
        console.log(`mongoose isn't connected`) 
    }
    else{
        console.log(`moogoose is connected`)
    }
})
 app.listen(PORT,()=>{
  console.log(`App is running on port: ${PORT}`);
})  