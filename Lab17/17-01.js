const redis = require('redis')

const client = redis.createClient('//redis-10275.c124.us-central1-1.gce.cloud.redislabs.com:10275',
                                    {password: 'RMjSK1pCVWjZARGPjtE9fOwjIbGTBQVz'})

client.on('ready', () => {console.log('ready')})
client.on('error', (err) => {console.log('error ' + err)})
client.on('connect', () => {console.log('connect')})
client.on('end', () => {console.log('end')})
client.set('key', 'HELLO', (err, res) => {console.log('key:', 'err = '+ err, 'result = '+res)})
client.get('key', (err, res) => {console.log('key:', 'err = '+ err, 'result = '+res)})
client.del('key', (err, res) => {console.log('key:', 'err = '+ err, 'result = '+res)})
client.get('key', (err, res) => {console.log('key:', 'err = '+ err, 'result = '+res)})
client.quit()