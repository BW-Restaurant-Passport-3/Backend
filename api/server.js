const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const restaurantRouter = require('./restaurants/restaurant-router');
const userRouter = require('./users/user-router');
const restricted = require('./auth/restricted-middleware');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/restaurants', restricted, restaurantRouter);
server.use('/api/users', restricted, userRouter);
server.get('/', (req, res) => {
  res
    .status(200)
    .json({
      messge:
        'Hello this is the API for restaurant passport. Take a look at the documentation for more information',
    });
});

module.exports = server;
