const routes = require("express").Router()
const teachers = require("./teachers")
const students = require("./students")

routes.use("/teachers", teachers)
routes.use("/students", students)


routes.get('/', (req, res) => {
    res.render("index")
})

module.exports = routes