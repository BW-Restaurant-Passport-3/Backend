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

module.exports = server;
