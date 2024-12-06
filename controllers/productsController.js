const products = [
    {
        id: 1,
        category: 'Beer',
        name: 'IPA',
        price: 8
    },
    {
        id: 1,
        category: 'Beer',
        name: 'Stout',
        price: 10
    },
    {
        id: 2,
        category: 'Wine',
        name: 'Red wine',
        price: 12
    },
    {
        id: 2,
        category: 'Wine',
        name: 'White wine',
        price: 12
    },
    {
        id: 3,
        category: 'Whiskey',
        name: 'Bourbon',
        price: 16
    },
    {
        id: 3,
        category: 'Whiskey',
        name: 'Scotch',
        price: 18
    },
    {
        id: 4,
        category: 'Rum',
        name: 'White rum',
        price: 10
    },
    {
        id: 4,
        category: 'Rum',
        name: 'Dark rum',
        price: 11
    },
    {
        id: 5,
        category: 'Tequila',
        name: 'Blanco',
        price: 10
    },
    {
        id: 5,
        category: 'Tequila',
        name: 'Reposado',
        price: 12
    }
];

const productsController = (req, res) => {
    res.locals.products = products;
    res.render('products', { products: products });
}

module.exports = productsController;