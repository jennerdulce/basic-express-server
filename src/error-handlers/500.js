'use strict';

/**
 * This function is triggered when a route comes across an error
 * @module  500handler
 * @param   {object} err    Error first method
 * @param   {object} req    Request object
 * @param   {object} res    Response object
 * @param   {function} next Next function to continue to rest of the code
 *
 * @returns {object} Responds with a status(500) and other useful information of the error
 */

module.exports = (err, req, res, next) => {
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `SERVER ERROR ${err}`
  });
};
