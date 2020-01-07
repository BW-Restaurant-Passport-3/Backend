const router = require('express').Router();
const User = require('../users/users-model');

router.get('/', async (req, res) => {
  try {
    const users = await User.getAll();

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving users from database' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.getById(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json();
    }
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving user from database', err });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletion = await User.remove(id);
    if (deletion) {
      res.status(200).json(deletion);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user from database', err });
  }
});

router.get('/:id/passport', async (req, res) => {
  const { id } = req.params;

  try {
    const passport = await User.getPassport(id);
    if (passport) {
      res.status(200).json(passport);
    } else {
      res.status(404);
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Erro retrieving passport from database', err });
  }
});

module.exports = router;
