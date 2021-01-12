const jsonwebtoken = require('jsonwebtoken');
const uuid = require('uuid');
const {
  JWT: { ISSUER, SECRET, EXPIRY },
} = require('../../config/config');
class Jwt {
  generateJwtForUser(claims) {
    return new Promise((resolve, reject) => {
      const iat = Math.floor(Date.now() / 1000);
      claims.exp = iat + parseInt(EXPIRY, 10);
      claims.iat = iat;
      claims.jti = uuid.v4();
      claims.iss = ISSUER;
      jsonwebtoken.sign(claims, SECRET, (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });
  }

  verifyandDecodeJwt(token) {
    return new Promise((resolve, reject) => {
      jsonwebtoken.verify(token, SECRET, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }
}

module.exports = new Jwt();
