const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message:
            "Cannot verify identity, Please Login in again or Sign up if you don't have an account",
          err,
        });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'You must be logged into access this' });
  }
};
