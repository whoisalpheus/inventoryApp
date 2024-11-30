// Environment variables
require('dotenv').config();
const path = require('node:path');
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const productsRouter = require('./routes/productsRouter');

const app = express();
// const assetsPath = path.join(__dirname, 'views'); // put into views set below...extra line of code???

// What does this do???
// app.use(express.static(path.join(__dirname, 'public')));
// Where does this go??? should it be extended: true???
// app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('views', path.join(__dirname, 'views')); // app.set('views', assetsPath); 
app.set('view engine', 'ejs');

const PORT = process.env.PORT;

// Routes
app.use('/', indexRouter); // main page
app.use('/categories', categoriesRouter); // different alcohol: wine, beer, whiskey, etc...
app.use('/products', productsRouter); // within each category: red wine, white wine, ipas, stout, bourbon, scotch, etc...

// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
    console.log(`Inventory app is listening on port ${PORT}!`);
});