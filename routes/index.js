const routes = require('express').Router()
const schools = require('./schools')

routes.use(schools.student)
routes.use(schools.teachers)

routes.get('/', (req, res) => {
    // res.status(200).json({message : 'Home Page School'})
    res.render('index.ejs')
})

module.exports = routes