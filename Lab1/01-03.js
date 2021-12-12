var http = require('http');

let h = (r) => {
    let rc = '';
    for (key in r.headers) rc += '<h3>' + key + ':' + r.headers[key] + '</h3>'; 
    return rc;
}
http.createServer(function (request, response) {
    let b = '';
    request.on('data', str => { b += str; console.log('data', b); })
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    request.on('end', () => response.end(
        '<!DOCTYPE html><html><head></head>' +
        '<body>' +
        '<h1>��������� �������</h1>' +
        '<h2>' + '�����:      ' + request.method + '</h2>' +
        '<h2>' + 'uri:        ' + request.url + '</h2>' +
        '<h2>' + '������:     ' + request.httpVersion + '</h2>' +
        '<h2>' + '���������:  ' + '</h2>' + 
        h(request) +
        '<h2>' + '����:  ' + b + '</h2>' +
        '<body>' +
        '<html>'
    )
    );
}).listen(3000);

console.log('Server running at http://localhost:3000/');