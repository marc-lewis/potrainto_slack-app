// set app dependencies
const express = require('express');
require('dotenv').config();
const app = express();


/**
 * Routes
 */

// public
const index = require('./routes/index');
app.use('/', index);

// admin (set route groups)
const admin = require('./routes/admin');
app.use('/admin', admin);

// auth routes for slack integration
const auth = require('./routes/auth');
app.use('/auth', auth);

// potrainto commands
const potrainto = require('./routes/potrainto');
app.use('/potrainto', potrainto);


/**
 * Listen on w/e port
 * TODO: SSL certs
 */
app.listen(1337);
console.log('Potrainto mainframe operation on  port 1337');