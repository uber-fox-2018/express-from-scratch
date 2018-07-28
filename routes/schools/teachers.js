const teachers = require('express').Router()
const Model   = require('../../models')

teachers.get('/teachers', (req, res) => {
    Model.Teacher.findAll({raw:true})
    .then( teachers => {
        res.render('teacher_page.ejs', {x : (teachers)})
    })
    
})

module.exports = teachers