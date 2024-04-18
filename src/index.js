 //require('dotenv').config({path:'./env'});
 import dotenv from 'dotenv';
//  import mongoose from "mongoose";
//  import {DB_NAME } from './constants';
import express from "express";
import connectDB from "./DB/index.js";
import { app } from './app.js';
 

dotenv.config({
  path:'./env'
})

connectDB()//this is an async function so it will return a promise
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port:${process.env.PORT || 8000}`)
  })
  app.on("error",()=>{
    console.log("This is the app.on() function attaches event handler to an event , here is Error:",error)
    throw error
  })
})
.catch((err)=>{
  console.log("Error hai:"+err)
})


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