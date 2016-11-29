const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {

    // authenticate post request through slack stuff
    // logging
    res.send('make the potrainto do something');

});

module.exports = router;
