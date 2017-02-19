/**
 * Set app dependencies
 */
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
// set body-parser for post requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Set up handlebars
 */
app.engine('handlebars', exphbs({

    defaultLayout: false,
    layoutsDir: './public/views/layouts/',
    partialsDir:'./public/views/partials/'

}));
app.set('views', './public/views');
app.set('view engine', 'handlebars');


/**
 * Routes
 */
// public
const main = require('./controllers/main');
app.use('/', main);

// admin (set route groups)
const admin = require('./controllers/admin');
app.use('/admin', admin);

// auth controllers for slack integration
const auth = require('./controllers/auth');
app.use('/auth', auth);

// slack commands
const slack = require('./controllers/slack/index');
app.use('/slack', slack);


/**
 * Listen on w/e port
 * TODO: SSL certs
 */
app.listen(1337);
console.log('Potrainto mainframe executing on port 1337');
