// var fs = require('fs');
// var data = '';

// let readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF8');

// readerStream.on('data', (chunk) => {
//     data += chunk;
// });

// readerStream.on('end', () => {
//     console.log(data);
// });

// readerStream.on('error', (err) => {
//     console.log(err.stack);
// });

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/message' && method === 'GET') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>my first page</title></head>')
    res.write('<body><h1>hello world</h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(3000);
