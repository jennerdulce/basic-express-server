'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
  console.log('entered homepage...');
  res.status(200).send('Welcome to the home page!');
});

app.get('/test', (req, res) => {
  res.status(200).send('testing route');
});

app.get('/person', validator, (req, res) => {
  const person = {
    name: req.query.name,
  };
  res.status(200).json(person);
});

app.get('/errorroute', (req, res) => {
  throw new Error('Server has something wrong with it');
});

/**
 * This function ensures the a query string has been passed
 * @param   {number} port  Request object
 * @returns {function}     Connects to server on the port specificed as an argument.
 */

function startServer(port){
  app.listen(port, () => {
    console.log(`now listening on port: ${port}`);
  });
}

app.use('*', notFoundHandler);
app.use(errorHandler);


/**
 * Exporting 'app' along with all the routes and function startServer to connect to server.
 * @module Server
 * @type   {{app: object, start: function}}
 */

module.exports = {
  app: app,
  start: startServer
};
