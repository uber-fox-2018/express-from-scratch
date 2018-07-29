const express = require('express')
let router = express()

router.get('/',function(req,res){
    res.render('index.ejs')
})

module.exports = router