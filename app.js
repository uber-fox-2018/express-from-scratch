'use strict'

const express = require('express');
const app = express();
const routes = require('./routes')
const Controller = require('./control/controller')
const port = 3000;

app.use(express.static(__dirname + '/views'))

app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(port, () => {
    console.log('app listening on port ', port)
})