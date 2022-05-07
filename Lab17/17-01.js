const redis = require('redis')

const client = redis.createClient('//redis-10275.c124.us-central1-1.gce.cloud.redislabs.com:10275',
                                    {password: 'RMjSK1pCVWjZARGPjtE9fOwjIbGTBQVz'})

client.on('ready', () => {console.log('ready')})
client.on('error', (err) => {console.log('error ' + err)})
client.on('connect', () => {console.log('connect')})
client.on('end', () => {console.log('end')})


//client.set('k1', 'v1x', (err, res) => {console.log('k1:', 'err = '+ err, 'result = '+res)})
//client.get('k1', (err, res) => {console.log('k1:', 'err = '+ err, 'result = '+res)})
//client.del('k1', (err, res) => {console.log('k1:', 'err = '+ err, 'result = '+res)})
//client.get('k1', (err, res) => {console.log('k1:', 'err = '+ err, 'result = '+res)})
client.quit()