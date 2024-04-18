 //require('dotenv').config({path:'./env'});
 import dotenv from 'dotenv';
//  import mongoose from "mongoose";
//  import {DB_NAME } from './constants';
import express from "express";
import connectDB from "./DB/index.js";
 

dotenv.config({
  path:'./env'
})

connectDB(); 


/*
const app=express();

 (async()  =>{
  try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
app.on("error",(error)=>{
  console.log("not able to talk to DB");
  throw error
})
app.listen(process.env.PORT,()=>{
  console.log("app is listening at port:"+{process.env.PORT});
})

  }catch(error){
console.log("eRRor:"+error)
  }
 })()
 */