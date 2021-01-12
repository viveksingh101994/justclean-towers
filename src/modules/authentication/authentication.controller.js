const { userSchema } = require('../../models/users');
const { validateCredentials } = require('./authentication.bl');
const { badRequest, success, unAuthorized } = require('../../common/response');
const jwt = require('../../common/jwt');
const { getUserByEmail } = require('./authentication.queries');
class AuthenticationController {
  static async validateAuthToken(req, res, next) {
    try {
      if (!req.headers.authtoken) {
        const resp = unAuthorized();
        return next(resp);
      }
      const user = await jwt.verifyandDecodeJwt(req.headers.authtoken);
      if (!user) {
        const resp = unAuthorized();
        return next(resp);
      }
      const { dataValues } = await getUserByEmail(user.email);
      if (!dataValues) {
        const resp = unAuthorized();
        return next(resp);
      }
      return next();
    } catch (err) {
      next(err);
    }
  }
  static async authenticateUserByCredentials(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await validateCredentials({ email, password });
      if (!user) {
        const resp = badRequest();
        resp.message = {
          message: 'invalid user or password',
        };
        return next(resp);
      }
      const xUser = await jwt.generateJwtForUser(user);
      if (xUser) {
        res.set('X-USER', xUser);
        const successResp = success();
        successResp.body = {
          xUser,
          user,
        };
        return next(successResp);
      } else {
        const resp = badRequest();
        resp.message = {
          message: 'invalid user or password',
        };
        return next(resp);
      }
    } catch (err) {
      next(err);
    }
  }

  static async validateParamsAuthentication(req, res, next) {
    try {
      await userSchema.validateAsync(req.body);
      next();
    } catch (err) {
      const resp = badRequest();
      resp.message = {
        message: err.message,
        stack: err.stack,
      };
      return next(resp);
    }
  }
}

module.exports = AuthenticationController;
