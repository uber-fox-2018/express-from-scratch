'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser') 

const Home = require ('./routes/index.js')
const Student = require('./routes/student.js')
const Teacher = require('./routes/teacher')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', Home)
app.use('/student', Student)
app.use('/teacher', Teacher)

app.listen(3000, console.log(`success connect to localhost:3000`))

