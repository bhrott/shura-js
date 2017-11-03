const _ = require('lodash')
const { hydrateSchema } = require('./utils')

module.exports = {
    '*': 'oneOf',
    extract: (schema, value) => {
        hydrateSchema(schema)

        for (let i = 0; i < schema.items.length; i++) {
            let item = schema.items[i]

            if (item === value) {
                return value
            }
        }
    }
}
