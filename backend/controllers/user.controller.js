const userModel= require('../models/user.model')
const signupId='';
const registerUser=(req,res)=>{
 userModel.find({email:req.body.email},(err,result)=>{
    if(result.length > 0){
     console.log(result);
     res.send({message:"Email already exist"})
    }
    else{
        let form = new userModel(req.body);
        form.save((err,result)=>{
            if(err){
                res.send({message:"operation failed, please try again later"})
            }
            else{
              res.send({message:'operation successful',status:true,result})
              console.log(result.id);
              signupId= result._id
            }
        })
    }
  })
}
const loginUser=(req,res)=>{
    userModel.find({email:req.body.email,passord:req.body.password},(err,result)=>{
        if(result.length > 0){
         console.log(result[0]._id);
         res.send({message:"Signin is successful",status:true,result})
        }
        else{
            res.send({message:"Wrong email or Password",err})
        }
    })
}
const getDashboard=(req,res)=>{
   let No = req.body.accountNo
   userModel.find({accountNo:No},(err,result)=>{
    if(result.length > 0){
        console.log(result);
        res.send({message:"Dashboard is ready",status:true,result})
    }
    else{
        console.log(err)
    }
   })
}
const addFund =(req,res)=>{
    userModel.find({_id:req.body.userId},(err,result)=>{
        if(err){
            res.send({message:"this user can't be found",err,status:true})
            console.log(err)
        }
        else{
            userModel.findByIdAndUpdate({_id:req.body.userId},{balance:(result[0].balance) + Number(req.body.amount)},(err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log(result);
                    res.send({message:"amount added successfully",status:true,result})
                }
            })
        }
    })
}
module.exports={loginUser,registerUser,getDashboard,addFund}