const jwt = require('jsonwebtoken')
const config = require('../config/config.json')

async function authenticateToken(req, res, next) {
  const TOKEN_VALIDATION_MSG = "Invalid token or token is not present";

  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).send({
      success: false,
      message: TOKEN_VALIDATION_MSG
    });
  }


  try {
    const payload=await jwt.verify(token, config.secret);
    req.payload = payload;
    console.log(" token verified");
    next();
  } catch (error) {
    return res.status(403).send({
      success: false,
      message: TOKEN_VALIDATION_MSG
    });
  }

}
module.exports =  authenticateToken;
