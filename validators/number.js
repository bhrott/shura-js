const _ = require('lodash')

module.exports = {
    '*': 'number',
    isValid: (template, value) => {
        if (!_.isNumber(value)) {
            return false
        }

        if (_.isNumber(template.min) && value < template.min) {
            return false
        }

        if (_.isNumber(template.max) && value > template.max) {
            return false
        }

        if (template.allowNegative === false && value < 0) {
            return false
        }

        if (template.allowPositive === false && value >= 0) {
            return false
        }

        return true
    }
}
