const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('data_teacher')
})

module.exports = router