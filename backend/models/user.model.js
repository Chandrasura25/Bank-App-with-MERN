const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    fullname:String,
    email:{type:String,unique:true},
    password:String,
    number:String,
    accountNo:{type:String,unique:true},
    currentDate:String,
    balance:Number
},{ timestamps: true })
const userModel =mongoose.model('Customers',userSchema)
module.exports=userModel