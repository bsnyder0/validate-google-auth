'use strict'

import {OAuth2Client} from 'google-auth-library';

module.exports = function(client_id) {

    const _this = this;
    const _client_id = client_id;
    const client = new OAuth2Client(client_id);

    this.validate(token) = async function(token) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: client_id
            });
            const payload = ticket.getPayload();
            console.log(payload);;
        } catch(e) {
            console.error(e);
        }
    }

};