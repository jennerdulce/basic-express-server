'use strict';

/**
 * This function all routes are passed through this function to display log information in the console
 * @module  logger
 * @param   {object} req    Request object
 * @param   {object} res    Response object
 * @param   {function} next Next function to continue to rest of the code
 * @returns {object} Responds with an endpoint and the VERB/method used.
 */

module.exports = (req, res, next) => {
  console.log(`PATH: ${req.path}`);
  console.log(`method: ${req.method}`);
  next();
};
