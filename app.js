const express = require('express')
const app = express()
const index = require('./routes/index')

app.use('/',index)

app.listen(3000,function(){
    console.log('listening to port 3000')
})

