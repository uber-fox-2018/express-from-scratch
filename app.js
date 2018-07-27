'use restrict'

const express = require ('express')
var app = express()
const bodyParser = require('body-parser')
const routers = require('./routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use('/', routers )
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log("App server is running on port 3000")  // running terus kalau diengage
})
