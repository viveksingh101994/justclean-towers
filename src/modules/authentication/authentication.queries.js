const { usersModel } = require('../../models/users');

class AuthenticationQueries {
  static async getUserByEmail(email) {
    return usersModel.findOne({ where: { email } });
  }
}

module.exports = AuthenticationQueries;
