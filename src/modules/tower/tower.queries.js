const { towersModel } = require('../../models/towers');
const { officesModel } = require('../../models/offices');
class TowerQueries {
  static async findAll() {
    return towersModel.findAll({});
  }
  static async findById(id) {
    return towersModel.findOne({ where: { id } });
  }
  static async create(tower) {
    return towersModel.create(tower);
  }

  static async bulkCreateOffice(office) {
    return officesModel.bulkCreate(office);
  }
  static async updateOfficeCounts(count, id) {
    await officesModel.update({ number_of_offices: count }, { where: { id } });
  }

  static async deleteTowerById(id) {
    await towersModel.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = TowerQueries;
