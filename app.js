// Environment variables
const express = require('express');
const path = require('node:path');
require('dotenv').config();
const app = express();

const indexRouter = require('./routes/indexRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const productsRouter = require('./routes/productsRouter');


// What does this do???
// app.use(express.static(path.join(__dirname, 'public')));
// Where does this go??? should it be extended: true???

// View engine setup

// const assetsPath = path.join(__dirname, 'views'); // put into views set below...extra line of code???

// View setup
app.set('views', path.join(__dirname, 'views')); // app.set('views', assetsPath); 
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter); // main page
app.use('/categories', categoriesRouter); // different alcohol: wine, beer, whiskey, etc...
app.use('/products', productsRouter); // within each category: red wine, white wine, ipas, stout, bourbon, scotch, etc...

// Error handling
// app.use((err, req, res, next) => {
//     console.log(err);
//     res.status(err.statusCode || 500).send(err.message);
// });

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Inventory app is listening on port ${PORT}!`);
});