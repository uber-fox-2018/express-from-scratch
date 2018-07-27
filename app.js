const routes = require('./routes')
const express = require('express');
const app = express();
const bodyParser = require('body-parser') 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use('/', routes);


app.listen(3000,()=>{
    console.log('server started at port ' + 3000);
})



