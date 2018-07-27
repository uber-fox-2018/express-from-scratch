const routes = require('express').Router()

routes.get('/',(req,res)=>{
    res.send('aiiiiiiiiiiiiiiiiing')
})

routes.get('/student',(req,res)=>{
    res.render('../views/student')
})

routes.post('/student',(req,res)=>{
    res.send('student has been registered')

})

routes.get('/teacher',(req,res)=>{
    res.render('../views/teacher')
})
module.exports = routes