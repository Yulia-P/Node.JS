const redis = require('redis')

const client = redis.createClient('//redis-10275.c124.us-central1-1.gce.cloud.redislabs.com:10275',
                                    {password: 'RMjSK1pCVWjZARGPjtE9fOwjIbGTBQVz'})


for (i = 1; i< 5; i++) {
    setTimeout(()=>{client.publish('channel', `hello`)}, i*1000)
}

setTimeout(()=>{
    client.quit()   
}, 60000)
