// Mock database for project...needed ???

// Categories
const categories = [
    { id: 1, name: 'Beer' },
    { id: 2, name: 'Wine' },
    { id: 3, name: 'Whiskey' },
    { id: 4, name: 'Rum' },
    { id: 5, name: 'Tequila' },
]; 

async function getCategoryById(categoryId) {
    return categories.find(category => categoryId === categoryId);
};

module.exports = { getCategoryById };

// Products
// const products = [
//     {},
// ];