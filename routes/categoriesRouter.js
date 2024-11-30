const { Router } = require('express');
const { getCategoryById } = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', (req, res) => res.send('All categories'));
categoryRouter.get('/:categoryId', getCategoryById);

module.exports = categoryRouter;