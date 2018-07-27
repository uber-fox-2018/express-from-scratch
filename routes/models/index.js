const models = require('express').Router();
const all = require('./all');
const models = require('./models');
routes.use('/models',models);
models.get('/',all);

module.exports = models;