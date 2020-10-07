const dbUser=require('../modal/user')
const dbService=require('../services/database_service')

exports.CreateUser=async(req,res)=>{
 
let response=   await dbService.add("user",req.body);
res.send(response)
       }

exports.LoginUser=async(req,res)=>{
        let response=await dbService.find("user",req.body)
        res.send(response)

        
}