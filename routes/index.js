const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    // logging here
    res.send('what do you call a swashbuckling potato who sails the seven seas, Arrrr! \b\r A Pirato.');

});

module.exports = router;