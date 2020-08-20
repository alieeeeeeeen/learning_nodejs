
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


const server = http.createServer(app)

server.listen(3000);