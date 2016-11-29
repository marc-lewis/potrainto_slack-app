const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {

    // authenticate post request through slack stuff
    // log something
    // use a regex to extract the verbs passed to potrainto
    res.send('Choo Choo!');

});

module.exports = router;
