const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Hacktiv8' })
})

module.exports = router