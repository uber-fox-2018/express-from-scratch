const app = require('express')();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/contact', (req, res) => {
  res.send('This is contact');
})

app.listen(port, () => {
  console.log(`Server running on ${port}`);
  
})