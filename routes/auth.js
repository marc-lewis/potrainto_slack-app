const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    // logging
    res.send('you have made some kind of auth request - are you validato enough for that?');

});

module.exports = router;