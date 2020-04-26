'use strict'

const {OAuth2Client} = require('google-auth-library');

module.exports = async function(client_id, token) {
    try {
        const client = new OAuth2Client(client_id);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: client_id
        });
        return ticket.getPayload();
    } catch(e) {
        return false;
    }
};