const routes = require('express').Router();

// routes.get('/', (req, res)=>{
//     res.render("teacher")
// })

routes.get('/', (req, res)=>{
    let teachers=
        [{
            "id": 1,
            "first_name": "Adler",
            "last_name": "Caldroni",
            "email": "acaldroni0@earthlink.net",
            "gender": "Male",
            "class": "Services"
          }, {
            "id": 2,
            "first_name": "Ado",
            "last_name": "Radage",
            "email": "aradage1@cpanel.net",
            "gender": "Male",
            "class": "Support"
          }, {
            "id": 3,
            "first_name": "Walsh",
            "last_name": "Giovannelli",
            "email": "wgiovannelli2@seattletimes.com",
            "gender": "Male",
            "class": "Legal"
          }, {
            "id": 4,
            "first_name": "Briant",
            "last_name": "D' Angelo",
            "email": "bdangelo3@prweb.com",
            "gender": "Male",
            "class": "Research and Development"
          }, {
            "id": 5,
            "first_name": "Rich",
            "last_name": "Andriolli",
            "email": "randriolli4@wikimedia.org",
            "gender": "Male",
            "class": "Legal"
          }, {
            "id": 6,
            "first_name": "Lolly",
            "last_name": "Cruickshank",
            "email": "lcruickshank5@ovh.net",
            "gender": "Female",
            "class": "Research and Development"
          }, {
            "id": 7,
            "first_name": "Erich",
            "last_name": "Batram",
            "email": "ebatram6@accuweather.com",
            "gender": "Male",
            "class": "Accounting"
          }, {
            "id": 8,
            "first_name": "Gilles",
            "last_name": "Brand",
            "email": "gbrand7@reverbnation.com",
            "gender": "Male",
            "class": "Business Development"
          }, {
            "id": 9,
            "first_name": "Lisha",
            "last_name": "Gladyer",
            "email": "lgladyer8@nytimes.com",
            "gender": "Female",
            "class": "Business Development"
          }, {
            "id": 10,
            "first_name": "Silvio",
            "last_name": "Renne",
            "email": "srenne9@ameblo.jp",
            "gender": "Male",
            "class": "Marketing"
          }]
    
    res.render("teacher", {title: "Our Teachers", teachers: teachers});
})

// routes.post('/', (req, res)=>{
//     res.send(req.body)
// })

module.exports = routes;