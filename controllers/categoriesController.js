// const asyncHandler = require('express-async-handler');
// const CustomNotFoundError = require('../errors/CustomNotFoundError.js');
// const db = require('../db.js');

const categories = [
    { name: 'Beer' },
    { name: 'Wine' },
    { name: 'Whiskey' },
    { name: 'Rum' },
    { name: 'Tequila' },
];


const categoriesController = (req, res) => {
    res.locals.categories = categories;
    res.render('categories', { categories: res.locals.categories });
}

// const getCategoryById = asyncHandler(async (req, res) => {
//     const { categoryId } = req.params;
    
//     const category = await db.getCategoryById(Number(categoryId));
    
//     if (!category) {
//         throw new CustomNotFoundError('Category not found');
//         // res.status(404).send('Category not found');
//         // return;
//     }

//     res.send(`Category Name: ${category.name}`);
// });

module.exports = categoriesController;