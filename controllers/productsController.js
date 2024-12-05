const products = [
    {
        category: 'Beer',
        subCategory: 'IPA',
        price: 8
    },
    {
        category: 'Beer',
        subCategory: 'Stout',
        price: 10
    },
    {
        category: 'Wine',
        subCategory: 'Red wine',
        price: 12
    },
    {
        category: 'Wine',
        subCategory: 'White wine',
        price: 12
    },
    {
        category: 'Whiskey',
        subCategory: 'Bourbon',
        price: 16
    },
    {
        category: 'Whiskey',
        subCategory: 'Scotch',
        price: 18
    },
    {
        category: 'Rum',
        subCategory: 'White rum',
        price: 10
    },
    {
        category: 'Rum',
        subCategory: 'Dark rum',
        price: 11
    },
    {
        category: 'Tequila',
        subCategory: 'Blanco',
        price: 10
    },
    {
        category: 'Tequila',
        subCategory: 'Reposado',
        price: 12
    }
];

const productsController = (req, res) => {
    res.locals.products = products;
    res.render('products', { products: products });
}

module.exports = productsController;