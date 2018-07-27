const routes = require('express').Router()

routes.get('/student', (req, res) => {
    // console.log('get: ',req.body);

    let studentObj = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email
    }
    res.render('registerStudent', studentObj)
})

routes.post('/student', (req, res) => {
    // console.log('post: ',req.body);
    let studentObj = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email
    }
    res.render('registerStudent', studentObj)
})

module.exports = routes