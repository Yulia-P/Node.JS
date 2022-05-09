const redis = require('redis')

const client = redis.createClient('//redis-10275.c124.us-central1-1.gce.cloud.redislabs.com:10275',
                                    {password: 'RMjSK1pCVWjZARGPjtE9fOwjIbGTBQVz'})


let start = new Date().getTime();
for(let n = 1; n<=10000; n++) 
    client.set(n, 'set' + n);
let end = new Date().getTime();
console.log(`Execution time of 10000 set: ${end-start}ms`);

start = new Date().getTime();
for(let n = 1; n<=10000; n++) 
    client.get(n);
end = new Date().getTime();
console.log(`Execution time of 10000 get: ${end-start}ms`);

start = new Date().getTime();
for(let n = 1; n<=10000; n++) 
    client.del(n);
end = new Date().getTime();
console.log(`Execution time of 10000 del: ${end-start}ms`);

client.quit();