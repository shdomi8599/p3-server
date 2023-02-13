const express = require('express');
const router = express.Router();
const { findAll } = require('../controller/productController');

router.get('/', findAll);

module.exports = router;
