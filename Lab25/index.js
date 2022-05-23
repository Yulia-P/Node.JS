const fs = require('fs');
const https = require('https');
const express = require('express');

const cert = {
    // Replace private key and cert with the appropriate names of the credentials you use
    key: fs.readFileSync('key.pem', 'utf8'),
    cert: fs.readFileSync('cert.pem', 'utf8')
};

const certP = {
    // Replace private key and cert with the appropriate names of the credentials you use
    key: fs.readFileSync('keyP.pem', 'utf8'),
    cert: fs.readFileSync('certP.pem', 'utf8')
};
const app = express();

app.get('/', (request, response) => {
    response.end('<h1>Resource</h1>')
});

const httpsServer = https.createServer(certP, app);
httpsServer.listen(3000, () => {
    console.log('Listening to https://localhost:3000/');
});