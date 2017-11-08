const extractorIdentifier = require('./extractorIdentifierKey')
const customExtractors = require('./customExtractors')

module.exports = schema => {
    const identifier = extractorIdentifier.get()
    const key = (schema || {})[identifier]

    const foundInDefaults = require('../index')[key]

    if (!!foundInDefaults) {
        return foundInDefaults
    }

    const foundInCustom = customExtractors.get()[key]

    if (!!foundInCustom) {
        return foundInCustom
    }

    return undefined
}
