const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');



routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});
routes.use('/models', models);
routes.use('/cars', cars);


module.exports = routes;



