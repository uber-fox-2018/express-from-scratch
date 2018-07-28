const express = require('express')
let router = express.Router()

router.get('/',function(req,res){
    res.render('student.ejs')
})

router.post('/',function(req,res) {
    // console.log(req.body);
    res.redirect('/')
})

module.exports = router