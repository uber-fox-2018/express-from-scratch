const routes = require('express').Router();

// routes.get('/', function(req, res){
//     // res.send('This is student!')
//     res.render('student');
// })

routes.get('/', (req, res)=>{
    res.render("student")
})
routes.post('/', (req, res)=>{
    res.send(req.body)
})

module.exports = routes;

