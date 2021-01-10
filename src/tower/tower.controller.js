const { success, created } = require('../common/response');
class TowerController {
  static async getTowers(req, res, next) {
    const successResp = success();
    successResp.body = {
      towers: [],
    };
    next(successResp);
  }

  static async createTower(req, res, next) {
    const successResp = created();
    successResp.body = {
      towers: [],
    };
    next(successResp);
  }
  static async updateTower(req, res, next) {
    const successResp = success();
    successResp.body = {
      message: 'updated',
    };
    next(successResp);
  }

  static async deleteTower(req, res, next) {
    const successResp = success();
    successResp.body = {
      message: 'updated',
    };
    next(successResp);
  }
}

module.exports = TowerController;
