const mongoose = require('mongoose')

const UserSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  verifyOtp:{
    type:String,
    default:""
  },
  verifyOtpExpireAt:{
    type:Number,
    default:0
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  rsetOtp:{
    type:String,
    default:""
  },
  resetOtpExpireAt:{
    type:Number,
    default:0
  }
  
})

module.exports=mongoose.model("User",UserSchema)