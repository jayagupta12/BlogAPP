const {
    createLogger,
    transports,
    format
} = require('winston');
require('winston-mongodb');
const logger = createLogger({
    transports: [
        new transports.MongoDB({
            level: 'error',
            db: 'mongodb://localhost:27017/BlogApp',
            collection: 'blog',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

module.exports = logger;