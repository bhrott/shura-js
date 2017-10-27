const _ = require('lodash')

module.exports = {
    '*': 'string',
    isValid: (template, value) => {
        if (!_.isString(value)) {
            return false
        }

        if (
            _.isNumber(template.minLength) &&
            value.length < template.minLength
        ) {
            return false
        }

        if (
            _.isNumber(template.maxLength) &&
            value.length > template.maxLength
        ) {
            return false
        }

        if (_.isRegExp(template.regex) && !template.regex.test(value)) {
            return false
        }

        if (_.isBoolean(template.allowEmpty) && !template.allowEmpty) {
            const flushedValue = value.replace(/\s/g, '')

            if (flushedValue.length == 0) {
                return false
            }
        }

        return true
    }
}
