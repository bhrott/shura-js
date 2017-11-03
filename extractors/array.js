const _ = require('lodash')
const { getExtractorByType, hydrateSchema } = require('./utils')

module.exports = {
    '*': 'array',
    extract: (schema, value) => {
        hydrateSchema(schema)

        let result = []
        const defaultValue = schema.resolveInvalidAs

        if (!_.isArray(value)) {
            return defaultValue
        }

        if (_.isNumber(schema.minLength) && value.length < schema.minLength) {
            return defaultValue
        }

        if (_.isNumber(schema.maxLength) && value.length > schema.maxLength) {
            return defaultValue
        }

        if (_.isArray(schema.innerTypes) && schema.innerTypes.length > 0) {
            for (let i = 0; i < value.length; i++) {
                const itemInResult = value[i]

                for (let j = 0; j < schema.innerTypes.length; j++) {
                    const innerType = schema.innerTypes[j]
                    const extractor = getExtractorByType(innerType)

                    if (!!extractor) {
                        const sanitized = extractor.extract(
                            innerType,
                            itemInResult
                        )

                        if (sanitized !== undefined) {
                            result.push(sanitized)
                        }
                    }
                }
            }
        } else {
            result = value
        }

        return result
    }
}
