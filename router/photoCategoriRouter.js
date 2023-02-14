const { findAll,findCount } = require('../controller/photoCategoriController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findCount);

module.exports = router;
