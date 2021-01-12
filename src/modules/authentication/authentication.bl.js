const { getUserByEmail } = require('./authentication.queries');
const { compare } = require('bcryptjs');
class AuthenticationBL {
  static async validateCredentials({ email, password }) {
    const { dataValues } = await getUserByEmail(email);
    if (!dataValues) {
      return null;
    }
    const isValid = await compare(password, dataValues.password);
    if (!isValid) {
      return null;
    }
    return {
      email: dataValues.email,
      userId: dataValues.id,
      name: dataValues.name,
    };
  }
}

module.exports = AuthenticationBL;
