// const db = require('../db.js'); // Not sure if this is what to do ???

const indexTitle = (req, res) => { // async if using db...
    // const getDb = await db();
    res.render('index', { title: 'Menu List', }); // db as second object....
};

module.exports = indexTitle;