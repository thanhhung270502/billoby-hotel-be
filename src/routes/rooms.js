const express = require('express');
const router = express.Router();

const RoomsController = require('../app/controllers/RoomsController');

// newsController.index
router.get('/:slug', RoomsController.show);
router.get('/', RoomsController.index);

module.exports = router;
