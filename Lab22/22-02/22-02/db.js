const Sequelize = require('sequelize')
const redis = require('redis')

global.sequelize = new Sequelize('blacklist', 'root', 'Zalesse2015!', { host: 'localhost', dialect: 'mysql' })

exports.redisClient = redis.createClient('//redis-12728.c266.us-east-1-3.ec2.cloud.redislabs.com:12728',
    { password: 'XVEy1eruf0Qy5ytJJMp5pop71KXXOr4b' })
