const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

// newsController.index
router.get('/', coursesController.index);

module.exports = router;
