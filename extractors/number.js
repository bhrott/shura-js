const _ = require('lodash')

module.exports = {
    '*': 'number',
    extract: (template, value) => {
        if (!_.isNumber(value)) {
            return undefined
        }

        if (_.isNumber(template.min) && value < template.min) {
            return undefined
        }

        if (_.isNumber(template.max) && value > template.max) {
            return undefined
        }

        if (template.allowNegative === false && value < 0) {
            return undefined
        }

        if (template.allowPositive === false && value >= 0) {
            return undefined
        }

        return value
    }
}
