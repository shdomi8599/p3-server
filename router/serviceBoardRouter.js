const express = require('express');
const router = express.Router();
const { findList, addList,deleteList,patchList} = require('../controller/serviceBoardController');

router.get('/:id', findList);
router.post('/', addList);
router.delete('/:id', deleteList);
router.patch('/:id', patchList);

module.exports = router;
