const express = require('express')
const routes = require('./routes')
let app = express()

app.set('view engine','ejs')

app.use('/',routes)
app.listen(3000)