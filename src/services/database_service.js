const { response } = require('express');
const mongodb=require('../database/connection')
let jwt = require('jsonwebtoken');

exports.add=async(collection_name,data)=>{
const db=mongodb.getDB();
return await db.collection(collection_name).insertOne(data)
}
exports.find=async(collection_name,data)=>{
    const db=mongodb.getDB();
    console.log(data)
    const user= await db.collection(collection_name).findOne({"email":data.email})
    if(user){
    const token = jwt.sign({email: data.email},
        config.secret,
        { expiresIn: '24h' // expires in 24 hours
        }
      );
  return json({
    success: true,
    message: 'Authentication successful!',
    token: token
  });
}  
    
}