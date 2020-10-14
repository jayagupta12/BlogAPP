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
