const jwt = require('jsonwebtoken')

function createToken () {
    const token = jwt.sign({}, 'hello')

    return token
}

module.exports = createToken