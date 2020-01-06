const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');

module.exports = async function restricted(req, res, next) {
  const { username, password } = req.headers;

  try {
    if (username && password) {
      const user = await Users.findBy({ username }).first();

      if (user && bcrypt.compareSync(password, user.password)) {
        next();
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ message: 'Please provide credentials' });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error validating credentials you cannot login', err });
  }
};
