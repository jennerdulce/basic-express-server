'use strict';

/**
 * This function ensures the a query string has been passed
 * @module  validator
 * @param   {object} req    Request object
 * @param   {object} res    Response object
 * @param   {function} next Next function to continue to rest of the code
 * @returns {function} Returns query string if valid. Returns an error if invalid
 */


module.exports = (req, res, next) => {
  if (!req.query.name) {
    throw new Error('ERROR ERROR ERROR.. MISSING query string for name');
  }
  next();
};
