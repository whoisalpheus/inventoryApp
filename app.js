// Environment variables
require('dotenv').config();
const path = require('node:path');
const express = require('express');
const indexRouter = require('./routes/indesRouter');

const app = express();
// const assetsPath = path.join(__dirname, 'views'); // put into views set below...extra line of code???

// Where does this go??? should it be extended: true???
// app.use(express.urlencoded({ extended: false }));

// View engine setup
app.set('views', path.join(__dirname, 'views')); // app.set('views', assetsPath); 
app.set('view engine', 'ejs');

const PORT = process.env.PORT;

// Routes
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Inventory app is listening on port ${PORT}!`);
});