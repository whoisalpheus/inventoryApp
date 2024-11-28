const express = require('express');

const indexRouter = express.Router();

const indexController = require('../controllers/indexController');

indexRouter.get('/', indexController);

module.exports = indexRouter;