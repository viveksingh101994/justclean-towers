const towers = require('../../models/towers');
class TowerQueries {
  static async findAll() {
    return towers.findAll({});
  }
  static async create(tower) {
    return towers.create(tower);
  }
}

module.exports = TowerQueries;
