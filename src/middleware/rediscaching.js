const redis = require('redis')
const config=require('../config/config.json')
const redisClient=redis.createClient(config.RedisPort);

exports.saveCache = async (key, value) => {
    redisClient.setex(key, JSON.stringify(value));
}