const _ = require('lodash')
const {
    getExtractorByType,
    extractorIdentifierKey,
    validateRequiredProperty,
    hydrateSchema
} = require('./utils')

const extractorKey = 'object'

const applyMiddleware = (schema, value) => {
    if (_.isFunction(schema.middleware)) {
        return schema.middleware(schema, value)
    }

    return value
}

const extract = (schema, value) => {
    const idKey = extractorIdentifierKey.get()
    let matchedSchema = schema

    if (schema[idKey] === extractorKey) {
        matchedSchema = schema.definition
    }

    const schemaKeys = Object.keys(matchedSchema)

    const result = {}

    for (let i = 0; i < schemaKeys.length; i++) {
        const key = schemaKeys[i]

        const valueProp = value[key]
        let valueSchema = matchedSchema[key]
        validateRequiredProperty(valueSchema, valueProp, key)

        if (valueProp === undefined) {
            continue
        }

        if (valueProp === null) {
            result[key] = null
            continue
        }

        const extractor = getExtractorByType(matchedSchema[key])

        if (!!extractor) {
            let sanitized = undefined

            hydrateSchema(valueSchema)

            if (extractor[idKey] === extractorKey) {
                sanitized = extract(valueSchema.definition, valueProp)
            } else {
                sanitized = extractor.extract(valueSchema, valueProp)
            }

            sanitized = applyMiddleware(valueSchema, sanitized)

            if (sanitized !== undefined) {
                result[key] = sanitized
            } else if (valueSchema.defaultValue !== undefined) {
                result[key] = valueSchema.defaultValue
            }
        }
    }

    return result
}

module.exports = {
    '*': extractorKey,
    extract: (schema, value) => {
        let sanitized = extract(schema, value)
        sanitized = applyMiddleware(schema, sanitized)

        return sanitized
    }
}
