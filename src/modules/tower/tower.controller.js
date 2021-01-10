const { success, created } = require('../../common/response');
const { findAll, create } = require('./tower.queries');
class TowerController {
  static async getTowers(req, res, next) {
    try {
      const towers = await findAll();
      const successResp = created();
      successResp.body = {
        towers,
      };
      next(successResp);
    } catch (err) {
      next(err);
    }
  }

  static async createTower(req, res, next) {
    const successResp = await create();
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
