const serverless = require('serverless-http');
const path = require('path');

// require the app module from project root
const app = require('../app');

// When deployed to Vercel, this file will be used as the serverless function entrypoint.
module.exports = serverless(app);
