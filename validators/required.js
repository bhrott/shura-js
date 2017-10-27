const _ = require('lodash')

module.exports = {
    '*': '__required__',
    isValid: (template, value) => {
        if (template.value === true) {
            return !_.isNil(value)
        }

        return true
    }
}
