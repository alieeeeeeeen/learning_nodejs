
const http = require('http');
const routes = require('./routes');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next()
})

app.use((req, res, next) => {
    console.log('in the other middleware');
    res.send('hello from express')
})

const server = http.createServer(app)

server.listen(3000);
