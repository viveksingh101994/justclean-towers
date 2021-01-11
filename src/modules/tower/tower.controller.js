const { success, created, badRequest } = require('../../common/response');
const { findAll } = require('./tower.queries');
const {
  createNewTower,
  findTower,
  createNewOffices,
  updateTower,
  deleteTowerById,
} = require('./tower.bl');
const { towersSchema } = require('../../models/towers');
const { createOfficeSchema } = require('../../models/offices');

class TowerController {
  static async findTowerById(req, res, next) {
    let {
      params: { id = null },
    } = req;

    id = parseInt(id);
    if (!id || isNaN(id)) {
      const resp = badRequest();
      resp.message = {
        message: 'invalid tower id',
      };
      return next(resp);
    }
    const tower = await findTower(id);
    if (!tower) {
      const resp = badRequest();
      resp.message = {
        message: 'invalid tower id',
      };
      return next(resp);
    }
    return next();
  }

  static async createOfficesValidator(req, res, next) {
    try {
      await createOfficeSchema.validateAsync(req.body);
      return next();
    } catch (err) {
      const resp = badRequest();
      resp.message = {
        message: err.message,
        stack: err.stack,
      };
      return next(resp);
    }
  }
  static async createTowerValidator(req, res, next) {
    try {
      await towersSchema.validateAsync(req.body);
      return next();
    } catch (err) {
      const resp = badRequest();
      resp.message = {
        message: err.message,
        stack: err.stack,
      };
      return next(resp);
    }
  }

  static async createNewOffices(req, res, next) {
    try {
      const {
        params: { id = null },
      } = req;
      const newOffices = await createNewOffices(req.body.offices, id);
      if (newOffices) {
        const successResp = created();
        successResp.message = {
          message: 'offices created successfully',
          body: newOffices,
        };
        return next(successResp);
      }
      const badRequestResp = badRequest();
      badRequestResp.message = {
        message: 'duplicate office!!! Please add new name',
      };
      return next(badRequestResp);
    } catch (err) {
      return next(err);
    }
  }
  static async getTowers(req, res, next) {
    try {
      const towers = await findAll();
      const successResp = created();
      successResp.body = {
        towers,
      };
      return next(successResp);
    } catch (err) {
      return next(err);
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
      return next(badRequestResp);
    } catch (err) {
      return next(err);
    }
  }
  static async updateTower(req, res, next) {
    try {
      await updateTower(req.body, req.params.id);
      const successResp = success();
      successResp.body = {
        message: 'tower created successfully',
        towers: {
          id: req.params.id,
          ...req.body,
        },
      };
      return next(successResp);
    } catch (err) {
      return next(err);
    }
  }

  static async deleteTower(req, res, next) {
    try {
      await deleteTowerById(req.params.id);
      const successResp = success();
      successResp.body = {
        message: 'tower deleted successfully',
      };
      return next(successResp);
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = TowerController;
