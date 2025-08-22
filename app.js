const express = require('express');
const app = express();
const path = require('path');
const __path = process.cwd();
const bodyParser = require("body-parser");

require('events').EventEmitter.defaultMaxListeners = 500;

const server = require('./qr');
const code = require('./pair');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/qr', server);
app.use('/code', code);
app.get('/pair', async (req, res, next) => {
  res.sendFile(path.join(__path, 'pair.html'));
});
app.get('/', async (req, res, next) => {
  res.sendFile(path.join(__path, 'main.html'));
});

module.exports = app;