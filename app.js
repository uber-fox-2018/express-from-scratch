'use strict'

const app = require("express")()

app.get('/', (req, res) => {
    res.send("I love Hacktiv8!")
})

app.listen(3000)