const { findAll } = require('../controller/installStatusController');

const express = require('express');
const router = express.Router();

router.get('/', findAll);

module.exports = router;
