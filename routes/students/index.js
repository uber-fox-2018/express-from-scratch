const student = require("express").Router()
// const findObject = require('../../utils/findObject')

const data = require("../../data.json")

student.get('/', (req, res) => {
    const students = data.students
    res.render("students/", { students })
})

student.get('/add', (req, res) => {
    res.render("students/add")
})

student.post('/add', (req, res) => {
    let obj = { student_name: req.body.name }
    res.send(obj)
})

// student.param('studentId', findObject('student'))

module.exports = student