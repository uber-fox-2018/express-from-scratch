const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render('homepage', {home: "EXPRESS SCHOOL", paragraph: "Learn express here"} )
})

routes.get('/students', (req, res) => {
    res.render('students', {title: "Student's Form"});
})

routes.post('/students', (req, res) => {
    let studentData = req.body;
    console.log(studentData);
    // res.render('students', {
    //     firstName: `${studentData.firstName}`,
    //     lastName: `${studentData.lastName}`,
    //     gender: `${studentData.gender}`,
    //     birthdate: `${studentData.birthdate}`,
    //     email: `${studentData.email}`
    // })
    res.redirect('/students')
})

routes.get('/teachers', (req, res) => {
    res.render('teachers', {title: "Teacher's Info", message: "Contact"});
})

module.exports = routes;