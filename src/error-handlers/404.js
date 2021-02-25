'use strict';

/**
 * This function handles routes that do not exist
 * @module  404handler
 * @param   {object} req    Request object
 * @param   {object} res    Response object
 *
 * @returns {object} Responds with a status(404) and other useful information
 */

module.exports = (req, res) => {
  res.status(404).send({
    error: 404,
    route: req.path,
    message: 'Route does not exist'
  });
};
