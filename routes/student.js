const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('form_student')
})

router.post('/', (req, res) => {
  let request = req.body
  let dataStudent = {
    name: request.name,
    birthday: request.birthday,
    email: request.email
  }
  res.render('data-student', dataStudent)
})

module.exports = router