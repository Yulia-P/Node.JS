let fs = require('fs');
let https = require('https');
let express = require('express');

const app = express();

let options = {
    // Replace private key and cert with the appropriate names of the credentials you use
    key: fs.readFileSync('LAB.key', 'utf8'),
    cert: fs.readFileSync('LAB.crt', 'utf8')
};

https.createServer(options, app).listen(3000);

app.use((req, res, next)=>{
    console.log('hello');
    next();
});

app.get('/', (request, response) => {
    console.log('Hello World')
    response.end('<h1>Hello world</h1>')
});

