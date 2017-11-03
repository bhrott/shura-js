const _ = require('lodash')
const { hydrateSchema } = require('./utils')

module.exports = {
    '*': 'string',
    extract: (schema, value) => {
        hydrateSchema(schema)

        schema.applyGlobalValidations(schema, value)

        if (!_.isString(value)) {
            schema.onValidationFailed(schema, value, 'not_a_string')
            return undefined
        }

        if (_.isNumber(schema.minLength) && value.length < schema.minLength) {
            schema.onValidationFailed(schema, value, 'min_length')
            return undefined
        }

        if (_.isNumber(schema.maxLength) && value.length > schema.maxLength) {
            schema.onValidationFailed(schema, value, 'max_length')
            return undefined
        }

        if (_.isRegExp(schema.regex) && !schema.regex.test(value)) {
            schema.onValidationFailed(schema, value, 'regex')
            return undefined
        }

        if (_.isBoolean(schema.allowEmpty) && !schema.allowEmpty) {
            const flushedValue = value.replace(/\s/g, '')

            if (flushedValue.length == 0) {
                schema.onValidationFailed(schema, value, 'is_empty')
                return undefined
            }
        }

        return value
    }
}
