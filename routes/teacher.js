const express = require('express')
let router = express.Router()

router.get('/',function(req,res) {
    res.render('teacher.ejs')
})

module.exports = router