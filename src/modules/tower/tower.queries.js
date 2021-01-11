const { towersModel } = require('../../models/towers');
const offices = require('../../models/offices');
class TowerQueries {
  static async findAll() {
    return towersModel.findAll({});
  }
  static async create(tower) {
    return towersModel.create(tower);
  }

  static async bulkCreateOffice(office) {
    return offices.bulkCreate(office);
  }
}

module.exports = TowerQueries;
