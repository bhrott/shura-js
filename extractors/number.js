const _ = require('lodash')
const { hydrateSchema } = require('./utils')

module.exports = {
    '*': 'number',
    extract: (schema, value) => {
        hydrateSchema(schema)

        schema.applyGlobalValidations(schema, value)

        if (!_.isNumber(value)) {
            schema.onValidationFailed(schema, value, 'not_a_number')
            return undefined
        }

        if (_.isNumber(schema.min) && value < schema.min) {
            schema.onValidationFailed(schema, value, 'min')
            return undefined
        }

        if (_.isNumber(schema.max) && value > schema.max) {
            schema.onValidationFailed(schema, value, 'max')
            return undefined
        }

        if (schema.allowNegative === false && value < 0) {
            schema.onValidationFailed(schema, value, 'is_negative')
            return undefined
        }

        if (schema.allowPositive === false && value >= 0) {
            schema.onValidationFailed(schema, value, 'is_positive')
            return undefined
        }

        return value
    }
}
