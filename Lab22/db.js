const Sequelize = require('sequelize')
const redis = require('redis')

global.sequelize = new Sequelize('black22', 'root', 'Zalesse2015!', {host:'localhost', dialect:'mysql'}) 

exports.redisClient = redis.createClient('//redis-10275.c124.us-central1-1.gce.cloud.redislabs.com:10275',
{password: 'RMjSK1pCVWjZARGPjtE9fOwjIbGTBQVz'})

