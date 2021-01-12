const { Router } = require('express');
// eslint-disable-next-line new-cap
const router = Router();
const {
  validateAuthToken,
} = require('../authentication/authentication.controller');
const {
  getTowers,
  createTower,
  updateTower,
  deleteTower,
  createTowerValidator,
  createOfficesValidator,
  findTowerById,
  createNewOffices,
  validateFindAll,
} = require('./tower.controller');

router.get('/', validateFindAll, getTowers);
router.post(
  '/:id',
  validateAuthToken,
  createOfficesValidator,
  findTowerById,
  createNewOffices
);
router.post('/', validateAuthToken, createTowerValidator, createTower);
router.put(
  '/:id',
  validateAuthToken,
  createTowerValidator,
  findTowerById,
  updateTower
);
router.delete('/:id', validateAuthToken, findTowerById, deleteTower);

module.exports = router;
