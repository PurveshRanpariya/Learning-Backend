import {v2 as cloudinary}  from "cloudinary"
import { log } from "console";
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        // file has been uploded successfull
        console.log("filr is uploaded on cloudinary",
        response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
        
    }
}

export {uploadOnCloudinary}


cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
    { public_id: 'shoes'},function(error, result) {console.log(result); });