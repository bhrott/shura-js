const _ = require('lodash')
const extractorIdentifierKey = require('./extractorIdentifierKey')

module.exports = (propertyName, template, value) => {
    if (
        template[extractorIdentifierKey.get()] !== undefined &&
        template.required &&
        _.isNil(value)
    ) {
        throw new Error(`${propertyName} is required`)
    }
}
