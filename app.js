const express = require('express');
const bodyParse = require('body-parser');

const routers = require('./routes/index');
const app = express();

app.set('view engine', 'ejs');

app.use('/', routers)
app.use(bodyParse.json())

app.listen(3000, function() {
  console.log('Server on port 3000!');
});