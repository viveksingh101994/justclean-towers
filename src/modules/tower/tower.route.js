const { Router } = require('express');
// eslint-disable-next-line new-cap
const router = Router();
const {
  getTowers,
  createTower,
  updateTower,
  deleteTower,
  createTowerValidator,
  createOfficesValidator,
  findTowerById,
  createNewOffices,
} = require('./tower.controller');

router.get('/', getTowers);
router.post('/:id', createOfficesValidator, findTowerById, createNewOffices);
router.post('/', createTowerValidator, createTower);
router.put('/:id', createTowerValidator, findTowerById, updateTower);
router.delete('/:id', findTowerById, deleteTower);

module.exports = router;
