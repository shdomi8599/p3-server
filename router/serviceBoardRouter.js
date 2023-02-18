const express = require('express');
const router = express.Router();
const { findList } = require('../controller/serviceBoardController');

router.get('/:id', findList);

module.exports = router;
