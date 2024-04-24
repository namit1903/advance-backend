import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const userSchema= new mongoose.Schema({
  username:{
    type: String,
    required:true,
    unique: true,
    lowercase: true,
    trim:true,
    index: true   //help in searching in databases
  },
  watchHistory:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Video",
    required:true
  },
fullName:{
  type: String,
    required:true,
    trim:true,
    index:true
},
email:{
  type: String,
  required:true,
  unique: true,
  lowercase: true,
  trim:true,
},
coverImage:{
type: String,
},
avatar:{//cloudnary servise i sused
type: String,
required:true,
},
password:{type: String,
required:[true,"password is required:)"],},
 refreshToken:{type:String ,
require:true}
  

},{timestamps:true})
userSchema.pre("save",async function(next){//avoid using arrow function because they do not have context hence can't use 'this'
  if(this.isModified("password")){
    this.password=bcrypt.hash(this.password,10);//agar password change kia hai tbhi bcrypt krenge
  }
next()
})
userSchema.methods.isPasswordCorrect=async function(password){
  return await bcrypt.compare(password,this.password);//check if password entered is correct or not
}
userSchema.methods.generateAccessToken=async function(){
  return jwt.sign({//check kro async await lagega ya naho
  _id:this._id,
  email:this.email,
  username:this.username,
  fullName:this.fullName, 
  },process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  })
}
userSchema.methods.generateRefreshToken=async function(){
  return jwt.sign({//check kro async await lagega ya naho
    _id:this._id,
                                     
    },process.env.REFRESH_TOKEN_SECRET,{
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}

export const User=mongoose.model('User',userSchema);