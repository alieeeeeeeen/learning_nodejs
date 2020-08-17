const fs = require('fs');

const reqestHandler = (req, res) => {
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
        return req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
}

module.exports = reqestHandler;
