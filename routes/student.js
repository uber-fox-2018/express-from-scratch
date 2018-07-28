const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('student.ejs')
})

router.post('/', (req, res) => {
    console.log(req.body);
    
    res.redirect('/')
})

module.exports = router