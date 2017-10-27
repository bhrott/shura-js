const _ = require('lodash')

module.exports = {
    '*': 'string',
    extract: (template, value) => {
        if (!_.isString(value)) {
            return undefined
        }

        if (
            _.isNumber(template.minLength) &&
            value.length < template.minLength
        ) {
            return undefined
        }

        if (
            _.isNumber(template.maxLength) &&
            value.length > template.maxLength
        ) {
            return undefined
        }

        if (_.isRegExp(template.regex) && !template.regex.test(value)) {
            return undefined
        }

        if (_.isBoolean(template.allowEmpty) && !template.allowEmpty) {
            const flushedValue = value.replace(/\s/g, '')

            if (flushedValue.length == 0) {
                return undefined
            }
        }

        return value
    }
}
