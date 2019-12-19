const router = require('express').Router();

router.get('/register', (req, res) => {
  res.status(200).send('GET made to api/auth/register');
});

router.get('/login', (req, res) => {
  res.status(200).send('GET made to api/auth/login');
});

module.exports = router;
