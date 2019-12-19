const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('GET to /api/passport');
});

module.exports = router;
