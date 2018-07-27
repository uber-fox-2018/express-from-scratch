const routes = require('express').Router();

routes.get('/',(req,res)=>{
    res.render("index",{title: 'Welcome to SMA 26'})
    // res.send("This is Homepage")
})

routes.get('/student',(req,res)=>{
    res.render("student", {
        head:'Student Form'
    })
    // res.send("this is get /student")
})

routes.post('/student',(req,res)=>{
    let student = {
        first_name: req.body.fname,
        last_name: req.body.lname,
        address: req.body.address,
        phone_number: req.body.phone,
        email: req.body.email
    }
    console.log(student)
})

routes.get('/teachers',(req,res)=>{
    res.render("teacher")
    // res.send("this is get /teachers")
})

module.exports = routes