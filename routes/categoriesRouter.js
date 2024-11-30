const express = require('express');

const categoriesRouter = express.Router();

const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', (req, res) => res.send('All categories'));
categoriesRouter.get('/:categoryId', categoriesController.getCategoryById);

module.exports = categoriesRouter;