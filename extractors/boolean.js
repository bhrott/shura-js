const { hydrateSchema } = require('./utils')

module.exports = {
    '*': 'boolean',
    extract: (schema, value) => {
        hydrateSchema(schema)

        if (value === true || value === false) {
            return value
        }
    }
}
