const extractorIdentifier = require('./extractorIdentifierKey')

module.exports = template => {
    const identifier = extractorIdentifier.get()
    const key = (template || {})[identifier]

    return require('../index')[key]
}
