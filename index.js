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
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>enter page</title></head>')
        res.write('<body><form action="message" method="POST"><input type="text" name="message"/><button type="submit">submit</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
})

server.listen(3000);
