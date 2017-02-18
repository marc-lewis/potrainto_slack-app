const express = require('express');
const router = express.Router();

const Authenticator = require('./authenticator');

/**
 * Handle a post request to '/slack'
 * (This can probably all be hacked)
 */
router.post('/', (req, res) => {

    // check the headers for a slack request
    if (req.headers['user-agent'].includes('Slackbot')) {

        // if the request is a valid slack cred
        if (Authenticator.validate(req.body)) {

            res.send('Choo choo!');
            console.log(req.body);

        // if not slack
        }

        // if valid send off for command parsing


        // TODO: check for a secret URL param to control the train outside of slack
    }

    // otherwise
    res.sendStatus(451);

});


/**
 * Handle a get request to 'slack'
 */
router.get('/', (req, res) => {

    res.send('&#x1F682;&nbsp;&#x1F683;&nbsp;&#x1F683; You should download Slack.');

});


module.exports = router;
