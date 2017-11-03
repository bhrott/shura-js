const getExtractorByType = require('./getExtractorByType')
const extractorIdentifierKey = require('./extractorIdentifierKey')
const validateRequiredProperty = require('./validateRequiredProperty')
const customExtractors = require('./customExtractors')
const hydrateSchema = require('./hydrateSchema')

module.exports = {
    getExtractorByType,
    extractorIdentifierKey,
    validateRequiredProperty,
    customExtractors,
    hydrateSchema
}
