const routes = require('express').Router();
const student = require('./student.js');
const teacher = require('./teacher.js');

routes.use("/student", student);
routes.use("/teacher", teacher);

//profile
routes.get('/', (req, res)=>{
    res.render('index')
})


module.exports = routes;