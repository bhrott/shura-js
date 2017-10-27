const _ = require('lodash')
const { object, array } = require('./extractors')

module.exports = {
    extract: (schema, value) => {
        if (_.isArray(value)) {
            return array.extract(schema, value)
        }

        if (_.isObject(value)) {
            return object.extract(schema, value)
        }

        throw new Error('invalid_json_value')
    }
}
