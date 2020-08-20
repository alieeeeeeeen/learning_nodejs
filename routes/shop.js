const express = require('express');

const router = express.Router();



router.get('/', (req, res, next) => {
    console.log('in the other middleware');
    res.send('<h1>hello from express</h1>')
})


module.exports = router;
