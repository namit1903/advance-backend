import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARI_API_KEY, 
  api_secret: process.env.CLOUDINARI_API_SECRET 
});

const uploadOnCloudinary=async(localFilePath)=>{
  try{
    if(!localFilePath) return null;
    //upload the file on cloudinary
    const response=await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"},)
    //ab file has been uploaded successfully
    // console.log(response);
    console.log("Uploaded successfully:",response.url);
    return response;
  }
  catch(err){
    //for cleaning anf safe purpose unlink kro
    //ab agar file upload nahi hui hai server pr toh kya krna chahiye kyuki file to server pr rhegi
    fs.unlinkSync(localFilePath)
    return null;
  }
  
}

export {uploadOnCloudinary};