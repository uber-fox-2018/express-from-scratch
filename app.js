const express = require('express');
const app = express()
const routes = require('./routes');
const ejs = require('ejs')

app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded());
app.use('/',routes)


app.listen(3000,()=>{
    console.log('app listening on port 3000');    
})