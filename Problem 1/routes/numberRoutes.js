const express = require('express');
const router = express.Router();
const numberController = require('../controller/numberController');

router.get('/:numberid', numberController.getNumbers);

router.get('/insertnumbers', numberController.insertNumbers)

module.exports = router;
