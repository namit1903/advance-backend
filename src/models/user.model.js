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
export const User=mongoose.model('User',userSchema);