const router = require('express').Router();

// Menampilkan profile sekolahan yang akan kamu buat seperti halaman home jika kalian masuk ke web sekolahan
router.get('/', (req, res) => {
  res.send('Welcome to Bina Bangsa School');
})
// menampilkan form untuk menginput data student
router.get('/student', (req, res) => {
  // res.send('Student Page');
  res.render('student.ejs')
})
// menerima data form untuk add student
router.post('/', (req, res) => {
  res.send('POST request to homepage');
})
// menampilkan data teachers dengan menggunakan table html
router.get('/teachers', (req, res) => {
  res.send('Teachers Page');
})

module.exports = router;