const extractorIdentifier = require('./extractorIdentifierKey')
const customExtractors = require('./customExtractors')

module.exports = template => {
    const identifier = extractorIdentifier.get()
    const key = (template || {})[identifier]

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
