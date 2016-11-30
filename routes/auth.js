const express = require('express');
const router = express.Router();
const request = require('request');
require('dotenv').config();

router.get('/', (req, res) => {

    const code = req.query.code;

    if(code) {

        // get the auth code from slacks auth post
        // post to slack to validate
        request.post(
            // this should probably go somewhere else
            'https://slack.com/api/oauth.access',
            {

                form: {

                    client_id: process.env.SLACK_CLIENT_ID,
                    client_secret: process.env.SLACK_CLIENT_SECRET,
                    code: code

                }

            },
            function (error, response, body) {

                if (!error && response.statusCode == 200) {

                    console.log(body);
                    const json = JSON.parse(body);
                    res.redirect(json.incoming_webhook.configuration_url);

                } else {

                    console.log(error.message);
                    res.redirict('/');

                }

            }

        );

    }

});

module.exports = router;
