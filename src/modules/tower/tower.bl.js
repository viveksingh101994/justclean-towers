const { towersModel } = require('../../models/towers');
const {
  create,
  bulkCreateOffice,
  findById,
  updateOfficeCounts,
  deleteTowerById,
  findAll,
} = require('./tower.queries');
const { Op } = require('sequelize');
class TowerBL {
  static async findAllTowers({
    showWithOffices = false,
    limit = 10,
    sort = null,
    name = null,
    page_no = 1,
    number_of_floors = null,
    location = null,
    id = null,
  }) {
    const queryBuiler = {
      include: [{ all: true }],
    };
    if (showWithOffices === 'true') {
      queryBuiler.where = {
        number_of_offices: { [Op.not]: 0 },
      };
    }
    if (id) {
      queryBuiler.where = { ...queryBuiler.where, id };
    }
    if (name) {
      queryBuiler.where = { ...queryBuiler.where, name };
    }
    // eslint-disable-next-line camelcase
    if (number_of_floors) {
      queryBuiler.where = { ...queryBuiler.where, number_of_floors };
    }
    if (location) {
      queryBuiler.where = { ...queryBuiler.where, location };
    }
    if (limit) {
      queryBuiler.limit = parseInt(limit);
    }
    // eslint-disable-next-line camelcase
    if (page_no) {
      queryBuiler.offset = 0 + (parseInt(page_no) - 1) * limit;
    }
    if (sort) {
      const sortingType =
        sort[0] === '-' ? [sort.slice(1, sort.length), 'DESC'] : [sort, 'ASC'];
      queryBuiler.order = [sortingType];
    }
    return findAll(queryBuiler);
  }
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
        latitude,
        longitude,
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
