const app = require('express')();
const port = 3000;
const router = require('./routes/index');

app.set('view engine', 'ejs');

app.use(router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
})