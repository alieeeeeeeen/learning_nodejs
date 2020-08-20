
const http = require('http');
const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');


const app = express();


app.use(adminRoutes);
app.use(shopRoutes);

app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>')
})


const server = http.createServer(app)

server.listen(3000);