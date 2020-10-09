const { response } = require('express');
const mongodb=require('../database/connection')
const tokenService=require('./token')



exports.add=async(collection_name,data)=>{
const db=mongodb.getDB();
return await db.collection(collection_name).insertOne(data)
}
exports.find=async(collection_name,data)=>{
    const db=mongodb.getDB();
    console.log(data)
    const user= await db.collection(collection_name).findOne({"email":data.email})
    if(user){

  const token = tokenService.generateAccessToken({ email: data.email});
  return {token:token,user:user};
}  
    
}