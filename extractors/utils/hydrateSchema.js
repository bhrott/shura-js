const _ = require('lodash')

module.exports = schema => {
    if (_.isNil(schema)) {
        schema = {}
    }

    if (!_.isFunction(schema.onValidationFailed)) {
        schema.onValidationFailed = (schema, originalValue, errorCode) => {}
    }

    if (_.isNil(schema.required)) {
        schema.required = false
    }
}
