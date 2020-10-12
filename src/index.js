const express = require("express");
const config = require('./config/config.json')
const user = require("./router/user_route")
const dbCon = require("./database/connection")
const bodyParser = require("body-parser")
let authMiddleware = require('./middleware/auth')
const unless = require('express-unless');
const swaggerUi=require('swagger-ui-express')
const swaggerJSDoc=require('swagger-jsdoc')
const app = express();

authMiddleware.unless = unless;
app.use(
  authMiddleware.unless({
    path: [/\/api\/v1\/auth*/,/\/api-documentation/,/\/docs/],
  })
);

const options={
  swaggerDefinition:{
    openApi:"3.0.1",
    basePath:`/api/v1`,
    info:{
      title:'Swagger Express API',
      version:'1.0.0'
    },
    servers: [
      {
        url: `http://localhost:${config.port}`
      }
    ]
  },

  apis:["./src/router/*.js"]
};
const swaggerSpec=swaggerJSDoc(options);


app.use(bodyParser.json());

dbCon.connectToDB();
app.listen(config.port, () => console.log(`server started at port ${config.port}`))

app.use("/api/v1/auth", user)

app.use("/docs", swaggerUi.serve);
app.get(
  "/docs",
  swaggerUi.setup(swaggerSpec, {
    explorer: true
  })
);