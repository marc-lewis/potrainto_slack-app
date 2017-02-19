const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    // log something
    res.send('What do you call a potato going down a river? \b\r A flowtato.');

});

module.exports = router;