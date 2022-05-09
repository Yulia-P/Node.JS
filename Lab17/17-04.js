const redis = require('redis')

const client = redis.createClient('//redis-10275.c124.us-central1-1.gce.cloud.redislabs.com:10275',
                                    {password: 'RMjSK1pCVWjZARGPjtE9fOwjIbGTBQVz'})


let start = new Date().getTime()
for(let n = 1; n<=10000; n++) 
    client.hset(n, n, JSON.stringify({id: n, val: `value ${n}`}))
let end = new Date().getTime()
console.log(`Execution time of 10000 hset: ${end-start}ms`)

start = new Date().getTime()
for(let n = 1; n<=10000; n++) 
    client.hget(n, n)
end = new Date().getTime()
console.log(`Execution time of 10000 hget: ${end-start}ms`)

client.quit();