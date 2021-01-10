const { success } = require('../common/response');
class TowerController {
  static async getLists(req, res, next) {
    const successResp = success();
    successResp.body = {
      towers: [],
    };
    next(successResp);
  }
}

module.exports = TowerController;
