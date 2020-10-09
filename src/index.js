const express = require("express");
const config = require('./config/config.json')
const user = require("./router/user_route")
const dbCon = require("./database/connection")
const bodyParser = require("body-parser")
let authMiddleware = require('./middleware/auth')
const unless = require('express-unless');

const app = express();

authMiddleware.unless = unless;
app.use(
  authMiddleware.unless({
    path: [/\/api\/v1\/auth*/],
  })
);




app.use(bodyParser.json());

dbCon.connectToDB();
app.listen(config.port, () => console.log(`server started at port ${config.port}`))

app.use("/api/v1/auth", user)