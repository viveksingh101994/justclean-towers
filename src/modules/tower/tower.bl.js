const { towersModel } = require('../../models/towers');
const {
  create,
  bulkCreateOffice,
  findById,
  updateOfficeCounts,
  deleteTowerById,
} = require('./tower.queries');

class TowerBL {
  static async findTower(id) {
    return findById(id);
  }

  static async updateTower(tower, id) {
    await towersModel.update({ ...tower }, { where: { id } });
  }
  static async deleteTowerById(id) {
    await deleteTowerById(id);
  }

  static async createNewOffices(offices, towerId) {
    try {
      const officesList = offices.map((office) => ({
        name: office.name,
        towerId,
      }));
      const createOffices = await bulkCreateOffice(officesList);
      await updateOfficeCounts(officesList.length, towerId);
      return createOffices.map((x) => {
        return { ...x.dataValues };
      });
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  static async createNewTower(towers) {
    try {
      const {
        name,
        // eslint-disable-next-line camelcase
        number_of_floors,
        location,
        longitude,
        latitude,
      } = towers;
      const { dataValues } = await create({
        name,
        // eslint-disable-next-line camelcase
        number_of_floors,
        location,
        longitude,
        latitude,
        number_of_offices: 0,
      });

      return {
        ...dataValues,
      };
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = TowerBL;
