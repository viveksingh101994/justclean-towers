const { Router } = require('express');
const {
  validateParamsAuthentication,
  authenticateUserByCredentials,
} = require('./authentication.controller');
// eslint-disable-next-line new-cap
const route = Router();

route.post('/', validateParamsAuthentication, authenticateUserByCredentials);

module.exports = route;
