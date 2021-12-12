var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((request, response) => {
    if (url.parse(request.url).pathname === '/api/name') {
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Pochikovskaya Yulia Sergeevna');
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/');
