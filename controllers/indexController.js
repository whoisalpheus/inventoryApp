const db = require('../db.js'); // Not sure if this is what to do ???

const displayHomePage = async (req, res) => {
    const getDb = await db();
    res.render('index', { title: 'Home Page', db }); // Def res.render something ???
};

module.exports = displayHomePage;