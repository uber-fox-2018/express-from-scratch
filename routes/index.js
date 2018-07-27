const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.render('homepage', {school: 'Hacktiv8'})
})



module.exports = routes