const jwt = require('jsonwebtoken');

const token = {
    generate: async ({id, username}, expiresIn) => {
        return await jwt.sign({
            id, username
        }, process.env.JWT_SECRET_KEY, {expiresIn});
    }
}

module.exports = {
    token
}