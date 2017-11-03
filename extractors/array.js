const _ = require('lodash')
const { getExtractorByType, hydrateSchema } = require('./utils')

module.exports = {
    '*': 'array',
    extract: (schema, value) => {
        hydrateSchema(schema)

        let result = []
        const defaultValue = schema.resolveInvalidAs

        if (!_.isArray(value)) {
            schema.onValidationFailed(schema, value, 'not_a_array')
            return defaultValue
        }

        if (_.isNumber(schema.minLength) && value.length < schema.minLength) {
            schema.onValidationFailed(schema, value, 'min_length')
            return defaultValue
        }

        if (_.isNumber(schema.maxLength) && value.length > schema.maxLength) {
            schema.onValidationFailed(schema, value, 'max_length')
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
                        } else {
                            schema.onValidationFailed(
                                innerType,
                                itemInResult,
                                'inner_type_validation_failed'
                            )
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
