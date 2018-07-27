"use strict"
const express = require('express');
const routes = require('./routes');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routes);


app.listen(3000, () => {
    console.log(`listening on port 3000`);
})