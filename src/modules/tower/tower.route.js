const { Router } = require('express');
// eslint-disable-next-line new-cap
const router = Router();
const {
  getTowers,
  createTower,
  updateTower,
  deleteTower,
} = require('./tower.controller');

router.get('/', getTowers);

router.post('/', createTower);
router.put('/', updateTower);
router.delete('/', deleteTower);

module.exports = router;
