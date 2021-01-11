const { success, created, badRequest } = require('../../common/response');
const { findAll } = require('./tower.queries');
const { createNewTower } = require('./tower.bl');
const { towersSchema } = require('../../models/towers');
class TowerController {
  static async createValidator(req, res, next) {
    try {
      await towersSchema.validateAsync(req.body);
      next();
    } catch (err) {
      const resp = badRequest();
      resp.message = {
        message: err.message,
        stack: err.stack,
      };
      next(resp);
    }
  }
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
    try {
      const newTower = await createNewTower(req.body);
      if (newTower) {
        const successResp = created();
        successResp.message = {
          message: 'tower created successfully',
          body: newTower,
        };
        return next(successResp);
      }
      const badRequestResp = badRequest();
      badRequestResp.message = {
        message: 'duplicate tower!!! Please add new name',
      };
      next(badRequestResp);
    } catch (err) {
      next(err);
    }
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
