const _ = require('lodash')
const { object, array } = require('./extractors')
const { customExtractors } = require('./extractors/utils')

module.exports = {
    extract: (schema, value) => {
        if (_.isArray(value)) {
            return array.extract(schema, value)
        }

        if (_.isObject(value)) {
            return object.extract(schema, value)
        }

        throw new Error('invalid_json_value')
    },
    mixin: (name, extractor) => {
        customExtractors.create(name, extractor)
    }
}
