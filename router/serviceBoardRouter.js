const express = require('express');
const router = express.Router();
const { findList, addList} = require('../controller/serviceBoardController');

router.get('/:id', findList);
router.post('/', addList);

module.exports = router;
