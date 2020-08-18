
const http = require('http');
const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"/> <button type="submit">submit</button></form>')
})

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    console.log('in the other middleware');
    res.send('<h1>hello from express</h1>')
})

const server = http.createServer(app)

server.listen(3000);