const express=require("express");
const config=require('./config/config.json')
const user=require("./router/user_route")
const dbCon=require("./database/connection")
const bodyParser=require("body-parser")
const middleware=require('./middleware/auth')
const unless = require('express-unless');

  const app = express();

var expressJWT=require('express-jwt')
  app.use(expressJWT({
    secret: config.secret,algorithms: ['RS256']
  }).unless({
    path: [/^\/api\/v1\/auth\/*/]
  }));


app.use(bodyParser.json())
app.use(middleware.authenticateToken);

dbCon.connectToDB();
app.listen(config.port,()=> console.log(`server started at port ${config.port}`))

app.use("/api/v1/auth",user)