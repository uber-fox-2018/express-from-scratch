const express = require('express');
const router = express.Router();
const bodyParse = require('body-parser');
router.use(bodyParse.json())

router.get('/', function(req, res) {
    res.render('student/index')
})

router.get('/student', function(req, res) {
    res.render('student/form')
})

router.post('/student', function(req, res) {
    res.send(req.bodyParse)
})

router.get('/teacher', function(req, res) {
    res.send('Asrul Harahap')
})

module.exports = router