const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const passportRouter = require('./passport/passport-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/passport', passportRouter);

module.exports = server;
