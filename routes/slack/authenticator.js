/**
 * Authenticate the slack post params
 * TODO: Rewrite this as middleware for the post to /slack
 */
class Authenticator {

    /**
     * Check if the user matches 'jagmitg' and return the necessary responses
     * @private
     * @param {string} user - the user name to check
     * @returns {boolean}
     */
    static _checkUser (user) {

        if (user === process.env.SLACK_USER) {

            return false;

        } else {

            return true;

        }

    }

    /**
     * Validate the slack post params to determine whether this is a legit request
     * @param {json} params - The params to check
     * @returns {boolean}
     */
    static validate (params) {

        // validate the stuff
        return this._checkUser();

    }

}

module.exports = Authenticator;