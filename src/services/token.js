const config=require('../config/config.json')
let jwt = require('jsonwebtoken');

  exports.generateAccessToken =(email)=> {
    // expires after half and hour (1800 seconds = 30 minutes)
    return  jwt.sign(email, config.secret, { expiresIn: '48h' });
  }
