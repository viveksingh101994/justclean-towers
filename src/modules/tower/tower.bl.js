const { create, bulkCreateOffice } = require('./tower.queries');

class TowerBL {
  static async createNewTower(towers) {
    try {
      const {
        name,
        // eslint-disable-next-line camelcase
        number_of_floors,
        location,
        longitude,
        latitude,
        offices,
      } = towers;
      const { dataValues } = await create({
        name,
        // eslint-disable-next-line camelcase
        number_of_floors,
        location,
        longitude,
        latitude,
        number_of_offices: offices.length,
      });
      const officesList = offices.map((office) => ({
        name: office.name,
        towerId: dataValues.id,
      }));
      const createOffices = await bulkCreateOffice(officesList);
      return {
        ...dataValues,
        offices: createOffices.map((x) => {
          return { ...x.dataValues };
        }),
      };
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = TowerBL;
