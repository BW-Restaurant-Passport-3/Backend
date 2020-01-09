const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../users/users-model');
const secrets = require('../../config/secrets');

router.post('/register', async (req, res) => {
  const userData = req.body;

  const hash = bcrypt.hashSync(userData.password, 8);
  userData.password = hash;

  try {
    const user = await User.add(userData);

    if (user) {
      const token = generateToken(user);
      res.status(201).json({ user, token });
    } else {
      res
        .status(400)
        .json({ message: 'Please provide registration information' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error registering user to database', err });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findBy({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      res.status(200).json({ user: user.id, token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error logging in to application', err });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: '8h',
  };

  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}

module.exports = router;
