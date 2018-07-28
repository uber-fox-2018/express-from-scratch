const student = require('express').Router()
const Model   = require('../../models')

student.get('/student', (req, res) => {
    Model.Student.findAll({raw:true})
    .then( students => {
        res.render('student_page.ejs', {x : (students)})
    })
    
})

// student.post('/addStudent', (req, res) => {
//     res.send('ini post student')
// })

module.exports = student