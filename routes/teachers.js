const routes = require('express').Router()

routes.get('/teacher', (req, res) => {
    res.render('listTeachers')
})

module.exports = routes