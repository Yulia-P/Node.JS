const redis = require('redis')

const client = redis.createClient('//redis-10275.c124.us-central1-1.gce.cloud.redislabs.com:10275',
                                    {password: 'RMjSK1pCVWjZARGPjtE9fOwjIbGTBQVz'})


client.set('incr', 0)

let start = new Date().getTime()
for(let n = 1; n<=10000; n++) 
    client.incr('incr')
let end = new Date().getTime()
console.log(`Execution time of 10000 incr: ${end-start}ms`)

start = new Date().getTime()
for(let n = 1; n<=10000; n++) 
    client.decr('incr')
end = new Date().getTime()
console.log(`Execution time of 10000 decr: ${end-start}ms`)

client.quit()