'use strict'

const express = require('express')
let app = express()
let index = require('./routes/index')
let student = require('./routes/student')
let teacher = require('./routes/teacher')
var bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/',index)
app.use('/student',student)
app.use('/teacher',teacher)

app.listen(3000, function(){
    console.log(`Listening on port 3000!`);
})