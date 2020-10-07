const db=require("mongodb").MongoClient
const config=require("../config/config.json")
let database;

module.exports={
    connectToDB:()=>{
        db.connect("mongodb://localhost:27017/BlogApp",{
        useNewUrlParser:true  , useUnifiedTopology: true
      },(err,db)=>{
          if(err) console.error(err)
          else console.log("connected to db");
          database=db.db(config.dbName);
      })},
      getDB: ()=> {return database}
}

