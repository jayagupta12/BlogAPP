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
    const user= await db.collection(collection_name).findOne({"email":data.email,"pass":data.pass})
    const user1= await db.collection(collection_name).findOne({"email":data.email})
    
    if(user){

  const token = tokenService.generateAccessToken({ email: data.email});
  return {token:token,user:user};
}  
else if(user1){
  return{user:'email and password is incorrect'}

}
else{
  return{user:"you need to Register"}
}
    



}

exports.checkEmail=async(collection_name,data)=>{
  const db=mongodb.getDB();
  const user= await db.collection(collection_name).findOne({"email":data.email})
  if(user){
    return 1;// exist
  }
  else{
    return 0;// notexist
  }
   
}