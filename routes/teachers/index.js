const teachers = require("express").Router()
// const findObject = require('../../utils/findObject')

const data = require("../../data.json")

teachers.get('/', (req, res) => {
    const teachers = data.teachers
    res.render("teachers/", { teachers })
})

teachers.get('/add', (req, res) => {
    res.render("teachers/add")
})

teachers.post('/add', (req, res) => {
    let obj = { teacher_name: req.body.name }
    res.send(obj)
})

// teachers.param('teacherId', findObject('teacher'))

module.exports = teachers