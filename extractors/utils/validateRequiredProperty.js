const _ = require('lodash')
const extractorIdentifierKey = require('./extractorIdentifierKey')

module.exports = (template, value, propertyName = '???') => {
    if (
        template[extractorIdentifierKey.get()] !== undefined &&
        template.required &&
        _.isNil(value)
    ) {
        throw new Error(`${propertyName} is required`)
    }
}
