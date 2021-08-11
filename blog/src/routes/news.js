const express = require('express');
const router = express.Router();
const newController = require('../app/controllers/NewController');

router.get('/detail-new', newController.detailNew);
router.get('/account-new', newController.accountNew);
router.get('/', newController.index);

module.exports = router;