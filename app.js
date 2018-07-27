const express = require('express')
const app = express()
const routesIndex = require('./routes/index')
const routesStudent = require('./routes/student')
const routesTeacher = require('./routes/teacher')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routesIndex)
app.use('/student', routesStudent)
app.use('/teachers', routesTeacher)

app.listen(3030, () => {
  console.log(`Listening port http://localhost:3030`)
})