const _ = require('lodash')

module.exports = schema => {
    if (!_.isFunction(schema.onValidationFailed)) {
        schema.onValidationFailed = (schema, originalValue, errorCode) => {}
    }

    if (_.isNil(schema.required)) {
        schema.required = false
    }

    schema.applyGlobalValidations = (schema, value) => {
        if (schema.required && _.isNil(value)) {
            schema.onValidationFailed(schema, value, 'required')
        }
    }
}
