const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    // logging here
    res.render('main');

});

module.exports = router;