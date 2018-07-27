const routes = require("express").Router()

routes.get('/', (req, res) => {
    res.send("I love Hacktiv8")
})

module.exports = routes