const redis = require('redis')

const client = redis.createClient('//redis-10275.c124.us-central1-1.gce.cloud.redislabs.com:10275',
                                    {password: 'RMjSK1pCVWjZARGPjtE9fOwjIbGTBQVz'})

client.on('subscribe', (channel, count) => {console.log('subscribe: ', 'channel_name = ', channel, 'count = ', count)})

client.on('message', (channel, message) => {console.log('message: ',   'channel_name = ', channel, 'message = ', message)})

client.subscribe('channel')

setTimeout(()=>{
    client.unsubscribe()
    client.quit()
}, 60000)