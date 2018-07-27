const express = require('express')
const app = express()
const routes = require('./routes/index')
const studentRoutes = require('./routes/students') 
const teacherRoutes = require('./routes/teachers')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// app.get('/', (req, res) => {
//     res.send('I Love Hacktiv8!')
// })

app.get('/', routes)

app.get('/student', studentRoutes)

app.post('/student', studentRoutes)

app.get('/teacher', teacherRoutes)



app.listen(3000, function() {
    console.log(`i'm Listen on port 3000`);
})