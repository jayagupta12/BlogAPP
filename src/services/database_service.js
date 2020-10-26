const { response } = require('express');
const mongodb=require('../database/connection')




exports.add=async(collection_name,data)=>{
const db=mongodb.getDB();
return await db.collection(collection_name).insertOne(data)
}

exports.find=async(collection_name,query)=>{
    const db=mongodb.getDB();
    console.log(query)
    const user= await db.collection(collection_name).findOne(query)
    return user;
  
  

}
exports.findAll=async(collection_name,query)=>{
    const db=mongodb.getDB();
    console.log(query)
    console.log(collection_name)
    const blog= await db.collection(collection_name).find(query).toArray();

    return blog;
  

}
exports.deleteOne=async(collection_name,query)=>{
    const db=mongodb.getDB();
    const response=db.collection(collection_name).deleteOne(query)
     return response;
}