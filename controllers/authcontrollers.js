
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const User = require('../models/usermodel')
const { sign } = require('crypto')

const register = async(req,res)=>{
  const {name,email,password}=req.body
  
  if(!name || !email || !password){
    return res.status(400).json({message:"All fields are required"})
  }
  try{
    const user = await User.findOne({email})
    if(user){
      return res.status(400).json({message:"User already exists"})
    }
    if(!validator.isEmail(email)){
      return res.status(400).json({message:"Invalid email"})
    }
    if(!validator.isStrongPassword(password)){
      return res.status(400).json({message:"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character"})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User({
      name,
      email,
      password:hashedPassword
    })
    await newUser.save()
    const token = jwt.sign({id:newUser._id},"hjghgfftddrsrs",{expiresIn:"1h"})
    res.status(201).json({message:"User created successfully"})
    res.cookie("token",token,{httpOnly:true})
  }
    
  catch(err){
    res.status(500).json({message:"Something went wrong"})
    
  }
  
  


  

const userLogin =async(req,res)=>{
  const {email,password}=req.body
  if(!email || !password){
    return res.status(400).json({message:"All fields are required"})
  }
  try{
    const user = await User.findOne({email})
    if(!user){
      return res.status(400).json({message:"User does not exist"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
      return res.status(400).json({message:"Invalid credentials"})
    }
    const token = jwt.sign({id:user._id},"hjghgfftddrsrs",{expiresIn:"1h"})
    res.status(200).json({message:"User logged in successfully"})
    res.cookie("token",token,{httpOnly:true})
  }
  catch(err){
    res.status(500).json({message:"Something went wrong"})
  }
  res.status(200).json({message:"User logged in successfully"})
}
  

module.exports = {register,userLogin}