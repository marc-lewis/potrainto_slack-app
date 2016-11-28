// set app dependencies
const express = require('express');
require('dotenv').config();

// logger

// web routes
    // public (set route gropus)
app.get('/', function (req, res) {


});
    // admin (set route groups)
app.get('/admin', function (req, res) {



});

    // auth routes for slack integration
app.get('/slack_button', function (req, res) {



});


// potrainto commands
app.post('/potrainto', function (req, res) {

    // if jag has sent a request send back something humerous
    // if igo has sent a request just sent back 'Error 707 - Risky Business'

});

// listen for traffic (will need to be SSL when live)
app.listen(1337);
