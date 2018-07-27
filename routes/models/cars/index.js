const cars = require('express').Router({ mergeParams: true });
const all = require('./all');
const single = require('./single');

cars.get('/', all);
cars.get('/:carsId', single);

module.exports = cars;