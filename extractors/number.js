const _ = require('lodash')
const { hydrateSchema } = require('./utils')

module.exports = {
    '*': 'number',
    extract: (schema, value) => {
        hydrateSchema(schema)

        if (!_.isNumber(value)) {
            return undefined
        }

        if (_.isNumber(schema.min) && value < schema.min) {
            return undefined
        }

        if (_.isNumber(schema.max) && value > schema.max) {
            return undefined
        }

        if (schema.allowNegative === false && value < 0) {
            return undefined
        }

        if (schema.allowPositive === false && value >= 0) {
            return undefined
        }

        return value
    }
}
