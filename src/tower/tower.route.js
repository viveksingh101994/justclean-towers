const { Router } = require('express');
// eslint-disable-next-line new-cap
const router = Router();
const { getLists } = require('./tower.controller');

router.get('/', getLists);

module.exports = router;
